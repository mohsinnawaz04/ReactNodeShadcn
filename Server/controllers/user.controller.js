import userModel from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
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

const updateProfileDetails = asyncHandler(async (req, res) => {
  const { fName, lName } = req.body;

  const updatedUser = await userModel.findByIdAndUpdate(
    req.user._id,
    {
      $set: { fName, lName },
    },
    {
      new: true,
    }
  );

  apiResponse.success(
    res,
    "Profile Details Update Successfully",
    updatedUser,
    201
  );
});

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
