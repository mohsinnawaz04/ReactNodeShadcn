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
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      fName: user.fName,
      lName: user.lName,
      profilePic: user.profilePic,
    },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
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
