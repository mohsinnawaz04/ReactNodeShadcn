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

const payloadGenerator = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
};

const tokenDecoder = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export {
  refreshTokenGenerator,
  accessTokenGenerator,
  payloadGenerator,
  tokenDecoder,
};
