import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected: ", connection.connection.host);
  } catch (err) {
    console.log("ERROR CONNECTING TO MONGODB", err);
  }
};

export default connectDB;
