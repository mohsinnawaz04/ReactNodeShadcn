import { cloudinary, uploadToCloudinary } from "../config/cloudinary.config.js";
const updateProfilePicture = async (fileBuffer, folder, publicId) => {
  try {
    // Delete Old Image
    await new Promise((res, rej) => {
      cloudinary.uploader.destroy(`${folder}/${publicId}`, (error, result) => {
        if (error) return error;
        res(result);
      });
    });

    // Upload New Image
    const result = await uploadToCloudinary(fileBuffer, folder, publicId);

    // Return the new image URL
    return result.secure_url;
  } catch (error) {
    console.error("Error updating image:", error);
    throw new Error("Image update failed");
  }
};

export { updateProfilePicture };
