import { uploadToCloudinary } from "../config/cloudinary.config.js";
const updateProfilePicture = async (fileBuffer, folder, publicId) => {
  try {
    // Upload New Image
    const result = await uploadToCloudinary(fileBuffer, folder, publicId);

    // Return the new image URL
    return result.secure_url;
  } catch (error) {
    console.error("Error updating image at Cloudinary Controller:", error);
    throw new Error("Image update failed");
  }
};

export { updateProfilePicture };
