import express from "express";
import {
  deleteUser,
  login,
  profileDetails,
  signup,
  updatePassword,
  updateProfileDetails,
} from "../controllers/user.controller.js";
import { upload } from "../config/multer.config.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/login", login);
router.post("/signup", upload.single("profilePic"), signup);
router.get("/profile", authMiddleware, profileDetails);
router.post(
  "/update-profile",
  authMiddleware,
  upload.single("profilePic"),
  updateProfileDetails
);
router.post("/update-password", authMiddleware, updatePassword);
router.get("/delete-user", authMiddleware, deleteUser);

export default router;
