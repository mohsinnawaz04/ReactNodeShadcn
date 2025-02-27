import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongodbConnection from "./config/mongodb.config.js";
import dotenv from "dotenv";
dotenv.config();

// // Multer for form-data using postman:
// import multer from "multer";
// const upload = multer(); // For memory storage (default)
// Importing Routers
import userRouter from "./routes/users.route.js";
import productRouter from "./routes/products.route.js";

// Creating express app
const app = express();
// Establishing connection with MongoDB
mongodbConnection();

// Cors Configuration
const allowedOrigins = ["http://localhost:5173", "http://example.com"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware for parsing incoming request data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(upload.any()); // Add this for form-data
app.use(express.static("public"));
app.use(cookieParser());

// Routes with middleware
const baseApiURL = "/api/v1";
app.get(baseApiURL, (req, res) => {
  console.log("On the base API route");
});
app.use(`${baseApiURL}/users`, userRouter);
app.use(`${baseApiURL}/products`, productRouter);

// Readying app for incoming requests on specified port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
