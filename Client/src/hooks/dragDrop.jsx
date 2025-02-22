import { useEffect, useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import ProductImageSlider from "../Components/Admin/Products/ProductImageSlider";
import UploadImageBtn from "../Components/Admin/Products/UploadImageBtn";

const fileTypes = ["JPG", "PNG", "GIF"];
const maxImages = 5;

function DragDrop({ Controller, control, name = "images" }) {
  // const [files, setFiles] = useState([]);

  // Note: to always go the last image in product image carousel, I am using swiperRef (for better UX)
  const swiperRef = useRef();

  // Handler for adding new files
  const handleChange = (newFiles, onChange, currentFiles) => {
    const updatedFiles = [...currentFiles, ...newFiles].slice(0, maxImages);
    onChange(updatedFiles); // Update the form state

    // Slide to the last image
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(updatedFiles.length - 1);
    }
  };

  // Handler for removing a file
  const handleRemove = (index, onChange, currentFiles) => {
    const updatedFiles = currentFiles.filter((_, i) => i !== index);
    onChange(updatedFiles); // Update the form state

    // Slide to the last image after removal
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      updatedFiles.length > 0
    ) {
      swiperRef.current.swiper.slideTo(updatedFiles.length - 1);
    }
  };

  // Handler for file input (e.g., clicking the upload button)
  const handleFileInput = (e, onChange, currentFiles) => {
    const newFiles = Array.from(e.target.files);
    handleChange(newFiles, onChange, currentFiles);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]} // Initial value is an empty array
      rules={{
        validate: (value) =>
          value.length > 0 || "At least one image is required",
      }}
      render={({ field }) => {
        // Use field.value as the source of truth for files
        const files = field.value;

        // Use useEffect to slide to the last image when files change
        useEffect(() => {
          if (
            swiperRef.current &&
            swiperRef.current.swiper &&
            files.length > 0
          ) {
            swiperRef.current.swiper.slideTo(files.length - 1);
          }
        }, [files]);

        return (
          <div>
            {/* Drag-and-drop area */}
            {files.length === 0 ? (
              <FileUploader
                handleChange={(newFiles) =>
                  handleChange(newFiles, field.onChange, files)
                }
                name="file"
                types={fileTypes}
                multiple={true}
              >
                <div className="h-[400px] relative overflow-hidden border rounded-md flex items-center justify-center mt-2 transition-all hover:border-white/40 hover:text-white/80">
                  <p>Drag & drop images here (max 5 files)</p>
                </div>
              </FileUploader>
            ) : (
              <ProductImageSlider
                files={files}
                handleRemove={(index) =>
                  handleRemove(index, field.onChange, files)
                }
                swiperRef={swiperRef}
              />
            )}

            {/* Total Images Count */}
            <span className="text-xs px-1 block my-3">
              Total Images: {files.length} / {maxImages}
            </span>

            {/* Upload Button */}
            <UploadImageBtn
              files={files}
              handleFileInput={(e) => handleFileInput(e, field.onChange, files)}
            />
          </div>
        );
      }}
    />
  );
}

export default DragDrop;
