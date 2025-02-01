import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import productModel from "../models/productModel.js";
import productImageModel from "../models/productImageModel.js";
import { productImageUploadToCloudinary } from "../config/cloudinary.config.js";
import { formatTimestampForWhatsApp } from "../utils/formatTime.js";

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

// Not using this controller in production. The one at top in enough for now
const addProductImage = asyncHandler(async (req, res) => {
  const { url } = req.body;

  const { productId } = req.params;
  const images = req.files ? req.files : null;

  if (!images || images.length === 0) {
    apiResponse.error(res, "No Images Found", null, 500);
  }

  try {
    const productImages = [];

    for (const image of images) {
      const publicId = `${image.originalname}-${Date.now()}`;

      const result = await productImageUploadToCloudinary(
        image.buffer,
        `product-images/${productId}`,
        publicId
      );

      const productImage = await productImageModel.create({
        url: result.secure_url,
        product: productId,
      });

      productImages.push(productImage);
    }
  } catch (err) {
    console.log("Error uploading images to Cloudinary:", err);
    return apiResponse.error(res, "Failed to upload product images", null, 500);
  }

  const productImages = {
    url,
    product: productId,
  };

  apiResponse.success(
    res,
    "Product Images Created Successfully",
    productImages
  );
});

export { productUpload, addProductImage, fetchAllProducts };
