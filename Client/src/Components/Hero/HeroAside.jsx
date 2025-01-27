import React from "react";
import ButtonComponent from "../Defaults/Button/ButtonComponent";

const HeroAside = () => {
  return (
    <div className="aside flex-shrink-0 px-5 mt-10 xl:px-0 xl:mt-0">
      <div className="row flex flex-wrap gap-5 flex-col-reverse xl:flex-col lg:flex-nowrap">
        {/* Card 1 */}
        <div className="medium-card w-full bg-[#526B67] rounded-2xl flex flex-col justify-center p-10 px-8 pb-0 space-y-5">
          <h2 className="text-[30px] font-bold leading-none">Iphone 13</h2>
          <p className="text-[18px]">Beat the Heat with Cool Savings!</p>
          <ButtonComponent
            classes={"w-fit uppercase px-5 bg-white bg-opacity-15"}
          />
          <div className="img-wrapper flex justify-center iphone-wrapper">
            <img src="images/iphone.png" alt="Iphone Image" />
          </div>
        </div>
        {/* Card 2 */}
        <div className="large-card w-full bg-[#7F93AA] rounded-2xl flex flex-col justify-center p-10 px-8 pt-0 space-y-5 overflow-hidden">
          <div className="img-wrapper flex justify-center -mt-8 mx-auto max-w-52 xl:max-w-max">
            <img src="images/shoes-with-jeans.png" alt="Jeans Image" />
          </div>
          <h2 className="text-[30px] font-bold leading-none">MacBook Pro</h2>
          <p className="text-[18px]">Beat the Heat with Cool Savings!</p>
          <ButtonComponent
            classes={"w-fit uppercase px-5 bg-white bg-opacity-15"}
          />
        </div>
        {/* Card 3 */}
        <div className="medium-card bg-transparent space-y-3 flex-shrink-0 my-auto">
          <h2 className="text-4xl font-semibold">
            Shop the <br /> Hottest Trends
          </h2>
          <h4 className="font-semibold text-lg">Fashion Sale Now On!</h4>
          <ButtonComponent classes={"uppercase"} />
        </div>
      </div>
    </div>
  );
};

export default HeroAside;
