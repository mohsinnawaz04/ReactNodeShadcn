import bcrypt from "bcrypt";
const verifyPassword = async (password, hash) => {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (err) {
    console.log("ERROR VERIFYING PASSWORD", err);
    throw new Error("Error verifying password");
  }
};

const encryptPassword = async (password) => {
  try {
    const result = await bcrypt.hash(password, 10);
    return result;
  } catch (err) {
    console.log("ERROR ENCRYPTING PASSWORD", err);
    throw new Error("Error encrypting password");
  }
};

export { verifyPassword, encryptPassword };
