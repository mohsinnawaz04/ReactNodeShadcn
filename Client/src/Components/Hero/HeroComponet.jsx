import { Button } from "../ui/button";

const HeroComponet = () => {
  return (
    <div className="container mx-auto">
      <div className="row flex gap-5">
        <div className="main space-y-6">
          <h1 className="font-bold text-[50px] leading-[1.1]">
            Unbeatable Fashion Sale! <br /> Get up to 75% OFF
          </h1>
          <Button className="uppercase bg-zinc-800 text-green px-5">
            Shop Now
          </Button>
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
                <Button className="uppercase bg-white bg-opacity-15 hover:bg-[#2a3225] text-white px-5">
                  Shop Now
                </Button>
              </div>
              <div className="img-wrapper">
                <img src="images/glasses.png" alt="Glasses Image" />
              </div>
            </div>
            <div className="products-carousel w-[300px] bg-[#5DBDAC] rounded-3xl p-5 relative">
              <div className="bottom-full w-full bg-white text-black">
                <div className="carousel"></div>
                <p className="text-[16px]">Blandit Magna</p>
                <div className="flex">
                  <p className="text-gray-600 line-through ">$50.00</p>
                  <p>$40.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aside flex-shrink-0">
          <div className="row flex flex-col gap-5">
            {/* Card 1 */}
            <div className="medium-card w-full bg-[#526B67] rounded-2xl flex flex-col justify-center p-10 px-8 pb-0 space-y-5">
              <h2 className="text-[30px] font-bold leading-none">
                MacBook Pro
              </h2>
              <p className="text-[18px]">Beat the Heat with Cool Savings!</p>
              <Button className="w-fit uppercase px-5 bg-white bg-opacity-15">
                Shop Now
              </Button>

              <div className="img-wrapper flex justify-center">
                <img src="images/iphone.png" alt="Iphone Image" />
              </div>
            </div>
            {/* Card 2 */}
            <div className="medium-card w-full bg-[#7F93AA] rounded-2xl flex flex-col justify-center p-10 px-8 pt-0 space-y-5 overflow-hidden">
              <div className="img-wrapper flex justify-center -mt-8">
                <img src="images/shoes-with-jeans.png" alt="Iphone Image" />
              </div>
              <h2 className="text-[30px] font-bold leading-none">
                MacBook Pro
              </h2>
              <p className="text-[18px]">Beat the Heat with Cool Savings!</p>
              <Button className="w-fit uppercase px-5 bg-white bg-opacity-15">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponet;
