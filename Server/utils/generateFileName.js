import { formatTimestampForWhatsApp } from "./formatTime.js";

// Function to sanitize the filename and generate a new one
export function generateFileName(originalname) {
  // Extract the original filename and sanitize it by replacing spaces before the extension
  const originalName = originalname.replace(" ", "_");

  // Extract the file extension
  const extname = originalName.split(".").pop(); // Extracts the file extension (e.g., jpg, png)

  // Get the timestamp
  const timestamp = Date.now();
  const decoded_time = formatTimestampForWhatsApp(timestamp); // Use your formatTimestampForWhatsApp function here

  // Generate the new filename
  const fileName = `${originalName.split(".")[0]}_${decoded_time}.${extname}`;

  return fileName.toLowerCase();
}
