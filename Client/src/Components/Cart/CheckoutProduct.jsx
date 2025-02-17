import React from "react";

const CheckoutProduct = () => {
  return (
    <div className="flex justify-between">
      <span>T-Shirt x2</span>
      <span>$1499</span>
    </div>

    /* {products.map((product) => (
                    <div key={product.id} className="flex justify-between">
                      <span>
                        {product.name} x{product.quantity}
                      </span>
                      <span>${(product.price * product.quantity).toFixed(2)}</span>
                    </div>
                  ))} */
  );
};

export default CheckoutProduct;
