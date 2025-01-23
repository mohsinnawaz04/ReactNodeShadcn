import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import HeroAside from "./HeroAside";
import HeroMain from "./HeroMain";
import ButtonComponent from "../Defaults/Button/ButtonComponent";
import { ArrowRight, MoveRight } from "lucide-react";
import CategoryCard from "./CategoryCard";

const HeroComponet = () => {
  const [numberOfProducts, setNumberOfProducts] = useState([]);

  useEffect(() => {
    let quantity = 5;
    for (let i = 0; i < quantity; i++) {
      setNumberOfProducts((prev) => [...prev, i]);
    }
  }, []);

  return (
    <>
      <section className="container mx-auto hidden">
        <div className="row flex gap-5">
          <HeroMain />
          <HeroAside />
        </div>
      </section>

      <section className="container mx-auto hidden mt-20">
        <div className="product-catalogue mt-20">
          <h2 className="mt-10 mb-0 text-4xl text-center font-semibold">
            New Arrivals
          </h2>
          <div className="row grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto place-items-center gap-5">
            {numberOfProducts.map((product, idx) => (
              <ProductCard key={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto hidden mt-20 popular-categories bg-zinc-800 bg-opacity-60 ps-10 rounded-2xl">
        <div className="grid grid-cols-12">
          <div className="text left col-span-8 py-10">
            <div className="grid grid-cols-12">
              <div className="col-span-4 flex flex-col items-start justify-between">
                <h2 className="text-4xl font-bold mr-6">Popular Categories</h2>
                <p className="my-5 lg:pe-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus luctus ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <ButtonComponent
                  classes={"uppercase bg-white bg-opacity-50 px-5"}
                  text="Shop Now"
                />
              </div>
              <div className="col-span-8">
                <div className="grid grid-cols-2 gap-5">
                  {/* Category Card */}
                  {Array(10)
                    .fill(null)
                    .map((_, idx) => (
                      <CategoryCard key={idx} />
                    ))}
                  {/* Category Card */}
                </div>
              </div>
            </div>
          </div>
          <div className="poster right col-span-4 relative bg-[#395C56] pe-10 rounded-r-2xl">
            <div className="poster-img img-wrapper absolute top-0 left-0 z-0 h-full">
              <img
                src="images/popular-categories/poster.png"
                alt="Poster Image"
              />
            </div>
            <div className="h-full flex flex-col pb-10 px-10 justify-end items-start z-20 relative">
              <h4 className="sub-heading uppercase text-lg tracking-wide font-semibold mt-auto">
                Step into savings
              </h4>
              <h2 className="heading text-4xl font-bold tracking-wide my-5">
                Fashion Sale with Incredible Discounts!
              </h2>
              <ButtonComponent
                classes={"uppercase bg-white bg-opacity-50 px-6 text-sm"}
                text="shop now"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 suggestion">
        <div className="grid grid-cols-2">
          <div className="col">
            <div className="img-wrapper rounded-2xl overflow-hidden">
              <img
                src="images/suggestions/keyboard-button.png"
                className="keyboard-img"
                alt="Keyboard Button"
              />
            </div>
          </div>
          <div className="col flex flex-col justify-between items-start">
            <div className="text-card space-y-10 sm:px-10 lg:px-20 lg:py-10">
              <h2 className="text-4xl font-semibold">
                Didn't find anything interesting?
              </h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <ButtonComponent classes={"uppercase px-8"} text="Get Promo" />
            </div>
            <div className="images-card flex gap-5">
              <div className="img-wrapper">
                <img
                  src="images/suggestions/carousel-img-1.png"
                  alt="Product Card Image"
                />
              </div>
              <div className="img-wrapper">
                <img
                  src="images/suggestions/carousel-img-2.png"
                  alt="Product Card Image"
                />
              </div>
              <div className="img-wrapper">
                <img
                  src="images/suggestions/carousel-img-3.png"
                  alt="Product Card Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroComponet;
