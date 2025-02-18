import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { X } from "lucide-react";
import AlertDialogComponent from "../../Defaults/Alert/AlertDialogComponent";
import { useState } from "react";

const ProductImageSlider = ({ files, handleRemove, swiperRef }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  function showConfirmationDialog(e, index) {
    setIsDialogOpen((prev) => !prev);
    setSelectedIndex(index);
  }

  function handleDialogAction(e) {
    const selectedAction = e.target.innerText.toLowerCase();

    if (selectedAction === "proceed") {
      handleRemove(selectedIndex);
    } else if (selectedAction === "cancel") {
      console.log("Clicked on cancel");
    }
    setIsDialogOpen(false);
  }

  return (
    <div className="h-[400px] relative overflow-hidden border rounded-md flex items-center justify-center mt-2 transition-all hover:border-white/40 hover:text-white/80">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full product__swiper"
      >
        {files?.map((file, index) => (
          <SwiperSlide key={index} className="relative overflow-hidden">
            <img
              src={URL.createObjectURL(file)}
              alt={`preview-${index}`}
              className="w-full h-full object-cover object-center"
            />
            <button
              onClick={(e) => showConfirmationDialog(e, index)}
              className="absolute top-2 right-2 bg-red-500 p-1 rounded-full flex items-center justify-center"
            >
              <X size={15} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <AlertDialogComponent open={isDialogOpen} onAction={handleDialogAction} />
    </div>
  );
};

export default ProductImageSlider;
