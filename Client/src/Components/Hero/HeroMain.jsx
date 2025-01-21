import React from "react";
import ButtonComponent from "../Defaults/Button/ButtonComponent";
import HeroCarousel from "./HeroCarousel";

const HeroMain = () => {
  return (
    <div className="main space-y-6">
      <h1 className="font-bold text-[50px] leading-[1.1]">
        Unbeatable Fashion Sale! <br /> Get up to 75% OFF
      </h1>
      <ButtonComponent classes={`uppercase bg-zinc-800 text-green px-5`} />
      <div className="img-wrapper rounded-md">
        <img src="images/model.png" alt="Model Image" />
      </div>
      <div className="bottom-cards flex gap-5">
        <div className="glasses-card bg-[#69815B] flex items-center justify-between rounded-3xl p-5 py-14 flex-grow-[1]">
          <div>
            <h2 className="font-semibold text-[35px]">Mile Glasses</h2>
            <p className="text-[24px] mt-2 mb-5 font-thin">
              Get an extra 50% Off
            </p>
            <ButtonComponent
              classes={
                "uppercase bg-white bg-opacity-15 hover:bg-[#2a3225] text-white px-5"
              }
            />
          </div>
          <div className="img-wrapper">
            <img src="images/glasses.png" alt="Glasses Image" />
          </div>
        </div>
        <div className="products-carousel w-[300px] bg-[#5DBDAC] rounded-3xl p-5 relative">
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] bg-white text-black text-center rounded-2xl">
            <div className="carousel">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
