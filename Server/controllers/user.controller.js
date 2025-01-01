import userModel from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  accessTokenGenerator,
  refreshTokenGenerator,
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

  // Send Response Now
  apiResponse.success(res, "Login Successful", { user }, 201, accessToken);
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
  const newUser = new userModel({
    email,
    password: hashedPassword,
    fName,
    lName,
  });

  // Set Refresh Token
  newUser.refreshToken = refreshTokenGenerator(newUser._id);
  await newUser.save();

  // Send Response Now
  apiResponse.success(res, "Signup Successful", { user: newUser }, 201);
});

export { login, signup };
