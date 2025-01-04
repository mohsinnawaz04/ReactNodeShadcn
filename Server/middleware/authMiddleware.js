import { tokenDecoder } from "../utils/TokenGenerator.js";
import userModel from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  const token = req.cookies?.token || req.headers?.authorization?.split(" ")[1];

  if (!token) {
    console.log("Token is not available");
    apiResponse.error(res, "Token Not Available", null, 400);
    return;
  }
  const { userId } = tokenDecoder(token);

  req.user = await userModel.findOne({ userId }).select("-password");
  next();
};

export { authMiddleware };
