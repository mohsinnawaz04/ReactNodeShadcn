import React from "react";
import ButtonComponent from "../Defaults/Button/ButtonComponent";

const HeroAside = () => {
  return (
    <div className="aside flex-shrink-0">
      <div className="row flex flex-col gap-5">
        {/* Card 1 */}
        <div className="medium-card w-full bg-[#526B67] rounded-2xl flex flex-col justify-center p-10 px-8 pb-0 space-y-5">
          <h2 className="text-[30px] font-bold leading-none">MacBook Pro</h2>
          <p className="text-[18px]">Beat the Heat with Cool Savings!</p>
          <ButtonComponent
            classes={"w-fit uppercase px-5 bg-white bg-opacity-15"}
          />
          <div className="img-wrapper flex justify-center">
            <img src="images/iphone.png" alt="Iphone Image" />
          </div>
        </div>
        {/* Card 2 */}
        <div className="large-card w-full bg-[#7F93AA] rounded-2xl flex flex-col justify-center p-10 px-8 pt-0 space-y-5 overflow-hidden">
          <div className="img-wrapper flex justify-center -mt-8">
            <img src="images/shoes-with-jeans.png" alt="Iphone Image" />
          </div>
          <h2 className="text-[30px] font-bold leading-none">MacBook Pro</h2>
          <p className="text-[18px]">Beat the Heat with Cool Savings!</p>
          <ButtonComponent
            classes={"w-fit uppercase px-5 bg-white bg-opacity-15"}
          />
        </div>
        {/* Card 3 */}
        <div className="medium-card bg-transparent space-y-3">
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
