import userModel from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  initializeCloudinary,
  uploadToCloudinary,
} from "../config/cloudinary.config.js";
import {
  accessTokenGenerator,
  refreshTokenGenerator,
  payloadGenerator,
  tokenDecoder,
} from "../utils/TokenGenerator.js";
import {
  encryptPassword,
  verifyPassword,
} from "../utils/bcryptPassword.util.js";
import { updateProfilePicture } from "../utils/updateProfilePicture.js";
import { formatTimestampForWhatsApp } from "../utils/formatTime.js";

// Login Controller
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    apiResponse.error(res, "Email and password are required", null, 400);
  }

  // Check if user exists
  const user = await userModel.findOne({ email });
  if (!user) {
    apiResponse.error(res, "User not found", null, 404);
  }

  // Check if password is correct
  const isMatch = await verifyPassword(password, user.password);
  if (!isMatch) {
    apiResponse.error(res, "Invalid credentials", null, 400);
  }

  // Set Refresh Token
  user.refreshToken = refreshTokenGenerator(user._id);

  // Generate Access Token to be sent to browser's cookie
  const accessToken = accessTokenGenerator(user._id);

  // Save User
  await user.save();

  const userPayload = payloadGenerator(user);

  // Send Response Now
  apiResponse.success(res, "Login Successful", userPayload, 201, accessToken);
});

// Initialize Cloudinary for Profile Picture Upload
initializeCloudinary();
// Signup Controller
const signup = asyncHandler(async (req, res) => {
  const { email, password, fName, lName } = req.body;

  if (!email || !password || !fName || !lName) {
    return apiResponse.error(
      res,
      "Name, email, and password are required",
      null,
      400
    );
  }

  // Check if user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return apiResponse.error(res, "User already exists", null, 400);
  }

  // Generate Hashed Password
  const hashedPassword = await encryptPassword(password);

  // Create new user
  const newUser = await userModel.create({
    email,
    password: hashedPassword,
    fName,
    lName,
  });

  // Upload Profile Picture to Cloudinary
  let profilePicUrl = null;
  if (req.file) {
    try {
      const uploadResult = await uploadToCloudinary(
        req.file.buffer,
        "profile_pictures",
        `${newUser._id}`
      );

      profilePicUrl = uploadResult;
    } catch (uploadError) {
      return apiResponse.error(
        res,
        "Error uploading profile picture",
        null,
        500
      );
    }
  }

  newUser.profilePic = profilePicUrl;
  await newUser.save();

  // Response Object for Frontend:
  const response = {
    fName: newUser.fName,
    lName: newUser.lName,
    email: newUser.email,
    profilePic: newUser.profilePic,
    role: newUser.role,
    _id: newUser._id,
  };

  // Update: No Need of creating Refresh token on signup
  // Set Refresh Token
  // newUser.refreshToken = refreshTokenGenerator(newUser._id);
  // await newUser.save();
  // Update: No Need of creating Refresh token on signup //

  // Send Response Now
  apiResponse.success(res, "Signup Successful", response, 201);
});

// Show Profile Details
const profileDetails = asyncHandler(async (req, res) => {
  apiResponse.success(res, "Profile Fetched Successfully", req.user, 201);
});

// Upload profile details such as first name, last name & Profile Picture
const updateProfileDetails = asyncHandler(async (req, res) => {
  console.log("User detials at updateProfile Controlller ==>", req.user);

  const { fName, lName } = req.body;

  let profilePicUrl = null;
  try {
    if (req.file) {
      try {
        const extname = req.file.originalname.split(".").pop(); // Extracts the file extension (jpg, png, etc.)
        const timestamp = Date.now();
        const decoded_time = formatTimestampForWhatsApp(timestamp);
        console.log(decoded_time);

        const fileName = `${
          req.file.originalname.split(".")[0]
        }_${decoded_time}.${extname}`;

        const uploadResult = await updateProfilePicture(
          req.file.buffer,
          `profile_pictures/${req.user._id}`,
          fileName
        );

        profilePicUrl = uploadResult;
      } catch (uploadError) {
        return apiResponse.error(
          res,
          "Error uploading profile picture",
          null,
          500
        );
      }
    }
  } catch (err) {
    console.log("ERROR UPDATING Image: ", err);
    throw new Error('Image update failed:", err');
  }

  // Prepare update object dynamically
  const updateFields = { fName, lName };

  // Only add profilePicUrl to the update if it's provided
  if (profilePicUrl) {
    updateFields.profilePic = profilePicUrl;
  }

  console.log("USER AT UPDATE PROFLE CONTROLLER", req.user);

  const updatedUser = await userModel
    .findByIdAndUpdate(
      req.user._id,
      {
        $set: updateFields,
      },
      {
        new: true,
      }
    )
    .select("-password -refreshToken");

  console.log("UPDATED USER", updatedUser);

  const userPayload = payloadGenerator(updatedUser);

  if (req.token === undefined || req.token === null || req.token === "null") {
    apiResponse.success(
      res,
      "Profile Details Update Successfully",
      userPayload,
      201
    );
  } else {
    apiResponse.success(
      res,
      "Profile Details Update Successfully",
      userPayload,
      201,
      req.token // Include req.token only if it's defined
    );
  }
});

// Update Password
const updatePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await userModel.findById(req.user._id);
  const oldPasswordHash = user.password;

  const isMatch = await verifyPassword(oldPassword, oldPasswordHash);
  if (!isMatch) {
    apiResponse.error(res, "Password is not correct", "ERROR", 201);
    return;
  }

  const hash = await encryptPassword(newPassword);

  const updatedUser = await userModel.findByIdAndUpdate(
    req.user._id,
    {
      $set: { password: hash },
    },
    {
      new: true,
    }
  );

  apiResponse.success(res, "Password Updated Successfully", updatedUser, 201);
});

// Delete your profile from Database
const deleteUser = asyncHandler(async (req, res) => {
  await userModel.findByIdAndDelete(req.user._id);

  apiResponse.success(res, "User has been deleted successfully.", "", 201);
});

export {
  login,
  signup,
  profileDetails,
  updateProfileDetails,
  updatePassword,
  deleteUser,
};
