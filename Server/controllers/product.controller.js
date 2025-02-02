import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import productModel from "../models/productModel.js";
import productImageModel from "../models/productImageModel.js";
import { productImageUploadToCloudinary } from "../config/cloudinary.config.js";
import { formatTimestampForWhatsApp } from "../utils/formatTime.js";
import mongoose from "mongoose";

// Single Product Upload Controller
const productUpload = asyncHandler(async (req, res) => {
  const { name, description, category, price } = req.body;

  const featuredImage = req.files ? req.files["featuredImage"]?.[0] : null;
  const galleryImages = req.files ? req.files["galleryImages"] : null;

  if (
    [name, description, category, price].some((field) => field.trim() === "")
  ) {
    return apiResponse.error(res, "All Fields are required", null, 500);
  }

  // Create Product in db
  const product = await productModel
    .create({
      name,
      description,
      category,
      price,
      featuredImage: null,
    })
    .catch((err) => {
      return apiResponse.error(
        res,
        "Database error while creating product",
        err,
        500
      );
    });

  if (featuredImage) {
    const formattedDate = formatTimestampForWhatsApp(Date.now());
    const publicId = `${featuredImage?.originalname}-${formattedDate}`;

    // Upload Images in cloudinary and get the URL
    const result = await productImageUploadToCloudinary(
      featuredImage.buffer,
      `product_images/${product._id}`,
      publicId
    );

    if (result) {
      product.featuredImage = result.secure_url;
      await product.save();
    }

    if (galleryImages.length > 0) {
      const uploadPromises = galleryImages.map(async (image) => {
        const formattedDate = formatTimestampForWhatsApp(Date.now());
        const publicId = `${image.originalname}-${formattedDate}`;

        const result = await productImageUploadToCloudinary(
          image.buffer,
          `product_images/${product._id}`,
          publicId
        );

        return productImageModel.create({
          url: result.secure_url,
          product: product._id,
        });
      });

      // Wait for all uploads to complete
      await Promise.all(uploadPromises);
    }
  }

  return apiResponse.success(res, "Product has been created.", product, 201);
});

const fetchAllProducts = asyncHandler(async (req, res) => {
  const products = await productModel.aggregate([
    {
      $lookup: {
        from: "productimages",
        localField: "_id",
        foreignField: "product",
        as: "imageGallery",
      },
    },
  ]);

  apiResponse.success(
    res,
    "Products have been fetched successfully",
    products,
    201
  );
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  productModel.findByIdAndDelete(productId, (err, res) => {
    // Product is not deleted because of some error.
    if (err) return apiResponse.error(res, "Cannot Delete Product.", err, 500);

    // Product has been deleted successfully.
    apiResponse.success(
      res,
      "Product has been deleted Successfully.",
      null,
      200
    );
  });
});

// Not using this controller in production. The one at top in enough for "NOW!"...
// This router can and should only be accessed by ADMIN!
const addProductImage = asyncHandler(async (req, res) => {
  // Get id of product from api request (frontend will request with product Id...)
  const { productId } = req.params;

  // Multer will give images - Maybe one maybe multiple depending on the Admin
  const images = req.files ? req.files : null;

  // If no images found from multer, then give response and return!
  if (!images || images.length === 0) {
    return apiResponse.error(res, "No Images Found", null, 500);
  }

  // Running loop to upload all the images to cloudinary one by one
  const productImageURL = [];
  try {
    for (const image of images) {
      const publicId = `${image.originalname}-${Date.now()}`;

      const result = await productImageUploadToCloudinary(
        image.buffer,
        `product-images/${productId}`,
        publicId
      );

      productImageURL.push({ url: result?.secure_url, product: productId });
    }

    const uploadedImages = await productImageModel.insertMany(productImageURL);

    apiResponse.success(
      res,
      "All Images Uploaded Successfully",
      uploadedImages,
      200
    );
  } catch (err) {
    console.log("Error uploading images to Cloudinary:", err);
    return apiResponse.error(res, "Failed to upload product images", err, 500);
  }
});

// Find a Single product
const filterProductById = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  if (!productId)
    return apiResponse.error(res, "Product Id not found.", null, 500);

  try {
    const filteredProduct = await productModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(productId) },
      },
      {
        $lookup: {
          from: "productimages",
          localField: "_id",
          foreignField: "product",
          as: "imageGallery",
        },
      },
    ]);

    if (!filterProductById) {
      return apiResponse.error(res, "Product Not Found.", 500);
    }

    return apiResponse.success(res, "PRODUCT FOUND", filteredProduct, 200);
  } catch (err) {
    return apiResponse.error(res, "Product Not Found.", err, 500);
  }
});

export {
  productUpload,
  addProductImage,
  fetchAllProducts,
  deleteProduct,
  filterProductById,
};
