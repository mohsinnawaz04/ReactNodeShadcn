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

      <section className="container mx-auto hidden">
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

      <section className="container mx-auto popular-categories">
        <div className="grid grid-cols-12">
          <div className="text left col-span-8">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <h2 className="text-4xl font-bold mr-6">Popular Categories</h2>
                <p className="my-5">
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
                  {Array(10).fill(null).map(())}
                  {/* Category Card */}
                </div>
              </div>
            </div>
          </div>
          <div className="poster right col-span-4 relative">
            <div className="poster-img img-wrapper absolute top-0 left-0 -z-10 h-full">
              <img
                src="images/popular-categories/poster.png"
                alt="Poster Image"
              />
            </div>
            <div>
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
    </>
  );
};

export default HeroComponet;
