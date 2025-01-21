import ButtonComponent from "../Defaults/Button/ButtonComponent";

const ProductCard = ({ isSale = false }) => {
  return (
    <div className="product-card w-fit py-10 text-center relative">
      {isSale && (
        <div className="sale-box bg-[#5DBDAC] rounded-full size-10 flex justify-center items-center absolute top-0 translate-y-8 right-0 translate-x-3">
          <span className="text-white text-xs">Sale!</span>
        </div>
      )}
      <div className="product-header mb-6 bg-zinc-900 w-full px-16 py-10 rounded-xl">
        <div className="img-wrapper">
          <img src="images/products/jacket.png" alt="Jacket" />
        </div>
      </div>
      <div className="product-footer">
        <h3>Lorem Ipsum Dolor.</h3>
        <div className="product-price flex justify-center gap-3 my-3 mx-auto">
          <span className="original-price line-through">$50.00</span>
          <span className="sale-price">$40.00</span>
        </div>
        <ButtonComponent
          classes={`uppercase bg-zinc-800 text-green px-5`}
          text="Add to cart"
        />
      </div>
    </div>
  );
};

export default ProductCard;
