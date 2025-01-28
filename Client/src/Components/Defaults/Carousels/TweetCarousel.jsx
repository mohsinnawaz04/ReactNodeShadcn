import { Twitter } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
1;
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";

const TweetCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 2500 }}
    >
      <SwiperSlide>
        <div className="div carousel tweets-carousel flex flex-col w-full gap-14 p-10 py-0">
          <div className="user-info flex items-center gap-5 ">
            <div className="profile-img img-wrapper">
              <img
                src="images/portfolio-carousel/01.png"
                alt="User's Profile Image"
              />
            </div>
            <div className="user-details">
              <h4 className="username text-xl font-semibold">John Doe</h4>
              <p className="user-handle text-sm opacity-80">@username</p>
            </div>
            <Twitter fill="#5DBDAC" stroke="none" className="ml-auto mb-auto" />
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="div carousel tweets-carousel flex flex-col h-full w-full gap-14 p-10">
          <div className="user-info flex items-center gap-5 ">
            <div className="profile-img img-wrapper">
              <img
                src="images/portfolio-carousel/01.png"
                alt="User's Profile Image"
              />
            </div>
            <div className="user-details">
              <h4 className="username text-xl font-semibold">John Doe</h4>
              <p className="user-handle text-sm opacity-80">@username</p>
            </div>
            <Twitter fill="#5DBDAC" stroke="none" className="ml-auto mb-auto" />
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TweetCarousel;
