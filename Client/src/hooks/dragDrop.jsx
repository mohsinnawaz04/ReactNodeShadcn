import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import UploadImageBtn from "../Components/Admin/Products/UploadImageBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Upload } from "lucide-react";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [files, setFiles] = useState([]);

  const handleChange = (newFiles) => {
    // Ensure that the total number of files does not exceed 5
    const updatedFiles = [...files, ...newFiles].slice(0, 5);
    setFiles(updatedFiles);
  };

  const handleRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleFileInput = (e) => {
    const newFiles = Array.from(e.target.files);
    handleChange(newFiles);
  };

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
        <div className="h-[400px] relative overflow-hidden border rounded-md flex items-center justify-center mt-2 transition-all hover:border-white/40 hover:text-white/80">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full product__swiper"
          >
            {files.map((file, index) => (
              <SwiperSlide key={index} className="relative overflow-hidden">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                  className="w-full h-full object-cover object-center"
                />
                <button
                  onClick={() => handleRemove(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  &times;
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Total Images Count */}
      <span className="text-xs px-1 block my-3">
        Total Images: {files.length} / 5
      </span>

      {/* Upload Button */}
      <label className="cursor-pointer block w-fit">
        <input
          type="file"
          accept=".jpg,.png,.gif"
          multiple
          onChange={handleFileInput}
          className="hidden"
        />
        <div className="text-white px-4 py-2 flex items-center gap-3 rounded-md text-center w-fit text-sm bg-zinc-900">
          <Upload size={17} />
          {files.length > 0 ? "Add another image" : "Upload image"}
        </div>
      </label>
    </div>
  );
}

export default DragDrop;
