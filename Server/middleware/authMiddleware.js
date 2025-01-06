import { tokenDecoder } from "../utils/TokenGenerator.js";
import userModel from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  const token = req.cookies?.token || req.headers?.authorization?.split(" ")[1];

  if (!token) {
    console.log("Token is not available");
    apiResponse.error(res, "Token Not Available", null, 400);
    return;
  }
  const { userID } = tokenDecoder(token);

  req.user = await userModel.findById(userID).select("-password");
  console.log("USER AT MIDDLEWARE", req.user);

  next();
};

export { authMiddleware };
