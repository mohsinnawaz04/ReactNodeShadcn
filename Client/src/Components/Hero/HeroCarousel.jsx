import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";
import ButtonComponent from "../Defaults/Button/ButtonComponent";

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 2500 }}
      navigation
    >
      <SwiperSlide>
        <div className="img-wrapper">
          <img
            src="images/carousel-item-01.png"
            alt="carousel-item"
            srcSet="images/carousel-item-01.png"
          />
        </div>
        <p className="text-[16px] text-sm">Blandit Magna</p>
        <div className="flex my-1 justify-center gap-3 text-sm">
          <p className="text-gray-600 line-through ">$50.00</p>
          <p>$40.00</p>
        </div>
        <ButtonComponent
          classes={"cart-btn uppercase  mt-1 text-xs px-5 "}
          text="Add to cart"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-wrapper">
          <img
            src="images/carousel-item-01.png"
            alt="carousel-item"
            srcSet="images/carousel-item-01.png"
          />
        </div>
        <p className="text-[16px] text-sm">Blandit Magna</p>
        <div className="flex my-1 justify-center gap-3 text-sm">
          <p className="text-gray-600 line-through ">$50.00</p>
          <p>$40.00</p>
        </div>
        <ButtonComponent
          classes={"cart-btn uppercase  mt-1 text-xs px-5 "}
          text="Add to cart"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-wrapper">
          <img
            src="images/carousel-item-01.png"
            alt="carousel-item"
            srcSet="images/carousel-item-01.png"
          />
        </div>
        <p className="text-[16px] text-sm">Blandit Magna</p>
        <div className="flex my-1 justify-center gap-3 text-sm">
          <p className="text-gray-600 line-through ">$50.00</p>
          <p>$40.00</p>
        </div>
        <ButtonComponent
          classes={"cart-btn uppercase  mt-1 text-xs px-5 "}
          text="Add to cart"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-wrapper">
          <img
            src="images/carousel-item-01.png"
            alt="carousel-item"
            srcSet="images/carousel-item-01.png"
          />
        </div>
        <p className="text-[16px] text-sm">Blandit Magna</p>
        <div className="flex my-1 justify-center gap-3 text-sm">
          <p className="text-gray-600 line-through ">$50.00</p>
          <p>$40.00</p>
        </div>
        <ButtonComponent
          classes={"cart-btn uppercase  mt-1 text-xs px-5 "}
          text="Add to cart"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
