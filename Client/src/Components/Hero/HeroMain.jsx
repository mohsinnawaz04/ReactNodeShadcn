import React from "react";
import ButtonComponent from "../Defaults/Button/ButtonComponent";
import HeroCarousel from "./HeroCarousel";

const HeroMain = () => {
  return (
    <div className="main space-y-6 px-5 xl:px-0">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.1]">
        Unbeatable Fashion Sale! <br /> Get up to 75% OFF
      </h1>
      <ButtonComponent classes={`uppercase bg-zinc-800 text-green px-5`} />
      <div className="img-wrapper rounded-md">
        <img src="images/model.png" alt="Model Image" />
      </div>
      <div className="bottom-cards flex flex-col gap-5 lg:flex-row">
        <div className="glasses-card bg-[#69815B] flex items-center justify-between rounded-3xl p-5 flex-grow-[1] flex-col sm:flex-row sm:py-14">
          <div className="w-full mb-5 sm:w-auto sm:mb-0 ">
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
        <div className="products-carousel bg-[#5DBDAC] rounded-3xl p-5 relative lg:w-[300px]">
          <div className="bg-white text-black text-center rounded-2xl lg:absolute lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2 lg:w-[90%]">
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
