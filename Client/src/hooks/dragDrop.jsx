import { useEffect, useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import ProductImageSlider from "../Components/Admin/Products/ProductImageSlider";
import UploadImageBtn from "../Components/Admin/Products/UploadImageBtn";

const fileTypes = ["JPG", "PNG", "GIF"];
const maxImages = 5;

function DragDrop() {
  const [files, setFiles] = useState([]);

  // Note: to always go the last image in product image carousel, I am using swiperRef (for better UX)
  const swiperRef = useRef();

  const handleChange = (newFiles) => {
    // Ensure that the total number of files does not exceed 5
    const updatedFiles = [...files, ...newFiles].slice(0, maxImages);
    setFiles(updatedFiles);

    // Slide to the last image after updating files
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(updatedFiles.length - 1);
    }
  };

  const handleRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    // Slide to the last image after removing a file
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      updatedFiles.length > 0
    ) {
      swiperRef.current.swiper.slideTo(updatedFiles.length - 1);
    }
  };

  const handleFileInput = (e) => {
    const newFiles = Array.from(e.target.files);
    handleChange(newFiles);
  };

  // Use useEffect to handle slideTo after files state is updated
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper && files.length > 0) {
      swiperRef.current.swiper.slideTo(files.length - 1);
    }
  }, [files]);

  return (
    <div>
      {/* Drag-and-drop area */}
      {files.length === 0 ? (
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple={true}
        >
          <div className="h-[400px] relative overflow-hidden border rounded-md flex items-center justify-center mt-2 transition-all hover:border-white/40 hover:text-white/80">
            <p>Drag & drop images here (max 5 files)</p>
          </div>
        </FileUploader>
      ) : (
        // Swiper Image Carousel
        <ProductImageSlider
          files={files}
          handleRemove={handleRemove}
          swiperRef={swiperRef}
        />
      )}

      {/* Total Images Count */}
      <span className="text-xs px-1 block my-3">
        Total Images: {files.length} / {maxImages}
      </span>

      {/* Upload Button */}
      <UploadImageBtn files={files} handleFileInput={handleFileInput} />
    </div>
  );
}

export default DragDrop;
