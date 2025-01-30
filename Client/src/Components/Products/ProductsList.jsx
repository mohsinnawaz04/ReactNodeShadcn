import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ButtonComponent from "../Defaults/Button/ButtonComponent";
import { Button } from "../ui/button";

const ProductsList = () => {
  const [numberOfProducts, setNumberOfProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(5);

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 5);
  };

  useEffect(() => {
    let quantity = 5;
    const newProducts = [];
    for (let i = 0; i < quantity; i++) {
      newProducts.push(i);
    }

    setNumberOfProducts((prev) => [...prev, ...newProducts]);
  }, []);
  return (
    <>
      <div className="row grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto place-items-center gap-5">
        {numberOfProducts.slice(0, visibleProducts).map((product, idx) => (
          <ProductCard key={idx} />
        ))}
      </div>
      {visibleProducts < numberOfProducts.length && (
        <Button
          onClick={handleShowMore}
          class="mt-5 px-10 py-2 rounded text-md bg-zinc-900"
        >
          Show More
        </Button>
      )}
    </>
  );
};

export default ProductsList;
