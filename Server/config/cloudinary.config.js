import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const initializeCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Log the configuration
  console.log(cloudinary.config());
};

const uploadToCloudinary = async (fileBuffer, folder, publicId) => {
  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: publicId,
        resource_type: "image",
        transformation: [
          { width: 200, height: 200 },
          { radius: "max" },
          { fetch_format: "auto" },
        ],
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(fileBuffer);
  });

  return result;

  // // Apply transformations to the generated URL manually
  // const optimizedUrl = cloudinary.url(result.public_id, {
  //   quality: "auto",
  //   fetch_format: "auto",
  // });

  // return optimizedUrl; // Return the optimized URL
};

const productImageUploadToCloudinary = async (fileBuffer, folder, publicId) => {
  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: publicId,
        resource_type: "image",
        transformation: [{ fetch_format: "auto" }],
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(fileBuffer);
  });

  return result;
};

export {
  cloudinary,
  initializeCloudinary,
  uploadToCloudinary,
  productImageUploadToCloudinary,
};
