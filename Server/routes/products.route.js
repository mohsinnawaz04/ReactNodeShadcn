import express from "express";
const router = express.Router();
import { upload } from "../config/multer.config.js";
import {
  addProductImage,
  productUpload,
} from "../controllers/product.controller.js";

router.post("/create", upload.array("featuredImage", 5), productUpload);
router.post(
  "/upload-productImages",
  upload.array("productImages", 5),
  addProductImage
);

export default router;
