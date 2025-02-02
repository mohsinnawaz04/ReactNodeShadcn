import express from "express";
const router = express.Router();
import { upload } from "../config/multer.config.js";
import {
  addProductImage,
  fetchAllProducts,
  filterProductById,
  productUpload,
} from "../controllers/product.controller.js";

// Create Product with Images (if present).
router.post(
  "/create",
  upload.fields([
    { name: "featuredImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 4 },
  ]),
  productUpload
);

// Get All Products
router.get("/fetchAllProducts", fetchAllProducts);

// Update or add product Images by using product Id which will come from frontend.
router.post(
  "/upload-productImages/:productId",
  upload.array("productImages", 5),
  addProductImage
);

// Get Single Product
router.get("/get-product/:productId", filterProductById);

export default router;
