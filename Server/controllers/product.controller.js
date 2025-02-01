import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
// import productModel from "../models/productModel.js";
import productImageModel from "../models/productImageModel.js";
import { productImageUploadToCloudinary } from "../config/cloudinary.config.js";
import { formatTimestampForWhatsApp } from "../utils/formatTime.js";

// Single Product Upload Controller
const productUpload = asyncHandler(async (req, res) => {
  const { name, description, category, price } = req.body;

  const featuredImage = req.files ? req.files[0] : null;
  const formattedDate = formatTimestampForWhatsApp(Date.now());
  const publicId = `${featuredImage.originalname}-${formattedDate}`;

  if (
    [name, description, category, price].some((field) => field.trim() === "")
  ) {
    return apiResponse.error(res, "All Fields are required", null, 500);
  }

  if (!featuredImage || featuredImage.length === 0) {
    return apiResponse.error(res, "No Images Found", null, 500);
  }

  // Create Product in db
  const product = await productModel.create({
    name,
    description,
    category,
    price,
    featuredImage,
  });

  if (product)
    apiResponse.success(
      res,
      "Product Has been created Successfully.",
      product,
      201
    );

  // Upload Images in cloudinary and get the URL
  const result = await productImageUploadToCloudinary(
    featuredImage?.buffer,
    "product-images",
    publicId
  );

  const producter = {
    name,
    description,
    category,
    price,
    result: result.secure_url,
  };

  console.log(producter);

  return apiResponse.success(res, "Product has been created.", producter);
});

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

export { productUpload, addProductImage };
