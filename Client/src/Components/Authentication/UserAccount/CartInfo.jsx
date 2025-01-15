const CartInfo = () => {
  return (
    <>
      <div className="cart-info flex justify-around mt-16">
        <div className="cart text-center font-bold">
          184{" "}
          <span className="text-xs block text-center font-normal">Cart</span>
        </div>
        <div className="purchases text-center font-bold">
          32{" "}
          <span className="text-xs block text-center font-normal">
            Purchases
          </span>
        </div>
        <div className="wishlist text-center font-bold">
          4.5K{" "}
          <span className="text-xs block text-center font-normal">
            Wishlist
          </span>
        </div>
      </div>
    </>
  );
};

export default CartInfo;
