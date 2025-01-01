import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fName: String,
    lName: String,
    email: String,
    password: String,
    profilePic: {
      type: String,
      default:
        "https://res.cloudinary.com/dux6spy1i/image/upload/v1734650249/profile_images/default.png",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
