import jwt from "jsonwebtoken";

const refreshTokenGenerator = (userID) => {
  return jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const accessTokenGenerator = (userID) => {
  return jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
};

export { refreshTokenGenerator, accessTokenGenerator };
