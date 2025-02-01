import express from "express";
const router = express.Router();
import { upload } from "../config/multer.config.js";
import {
  addProductImage,
  fetchAllProducts,
  productUpload,
} from "../controllers/product.controller.js";

router.post(
  "/create",
  upload.fields([
    { name: "featuredImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 4 },
  ]),
  productUpload
);
router.post(
  "/upload-productImages",
  upload.array("productImages", 5),
  addProductImage
);

router.get("/fetchAllProducts", fetchAllProducts);

export default router;
