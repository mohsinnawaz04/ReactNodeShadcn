import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import HeroAside from "./HeroAside";
import HeroMain from "./HeroMain";

const HeroComponet = () => {
  return (
    <div className="container mx-auto">
      <div className="row flex gap-5">
        <HeroMain />
        <HeroAside />
      </div>

      <div className="product-catalogue mt-20">
        <h2 className="mt-10 mb-0 text-4xl text-center font-semibold">
          New Arrivals
        </h2>
        <div className="row flex flex-wrap gap-5">
          <ProductCard isSale={true} />
          <ProductCard isSale={true} />
          <ProductCard isSale={true} />
          <ProductCard isSale={true} />
          <ProductCard isSale={true} />
        </div>
      </div>
    </div>
  );
};

export default HeroComponet;
