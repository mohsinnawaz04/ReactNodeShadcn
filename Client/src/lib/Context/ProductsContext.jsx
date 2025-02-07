import { createContext, useContext, useState } from "react";
import { instance } from "../axios";

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export function ProductsProvider({ children }) {
  //   const [productsArray, setProductsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadProducts() {
    const allProducts = await instance.get("/products/fetchAllProducts");

    // if (allProducts) {
    //   setProductsArray(allProducts);
    //   setIsLoading(false);
    // }

    if (allProducts) {
      setIsLoading(false);
      return allProducts;
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        loadProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
