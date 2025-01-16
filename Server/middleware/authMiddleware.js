import { accessTokenGenerator, tokenDecoder } from "../utils/TokenGenerator.js";
import userModel from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const accessToken =
    req.cookies?.token || req.headers?.authorization?.split(" ")[1];

  console.log("ACCESS TOKEN AT 1st MOST UPPPER LEVEL", accessToken);
  if (!accessToken) {
    console.log("Token is not available");
    apiResponse.error(res, "Token Not Available", null, 400);
    return;
  }
  try {
    const { userID } = tokenDecoder(accessToken);

    console.log("ACCESS TOKEN AT 2nd MOST UPPPER LEVEL", userID);

    const user = await userModel
      .findById(userID)
      .select("-password -refreshToken");
    console.log("USER Found", user);

    if (!user) return apiResponse.error(res, "User not found", null, 404);

    req.user = user;
    console.log("USER AT MIDDLEWARE", req.user);
    return next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      const { userID } = jwt.decode(accessToken);

      const user = await userModel.findById(userID);

      if (!user || !user.refreshToken)
        return apiResponse.error(
          res,
          "Refresh Token missing or invalid",
          null,
          403
        );

      try {
        const decodedRefresh = tokenDecoder(user.refreshToken);
        console.log("Decoded refresh token:", decodedRefresh);

        const newAccessToken = accessTokenGenerator(decodedRefresh.userID);
        console.log("New Access Token", newAccessToken);

        res.setHeader("Authorization", `Bearer ${newAccessToken}`);

        req.user = user;
        req.token = newAccessToken;

        return next();
      } catch (refreshErr) {
        return apiResponse.error(
          res,
          "Refresh Token invalid or expired.",
          refreshErr,
          401
        );
      }
    }
    return apiResponse.error(res, "Unauthorized", null, 401);
  }
};

export { authMiddleware };
