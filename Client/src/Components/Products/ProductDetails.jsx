import ButtonComponent from "../Defaults/Button/ButtonComponent";
import ImageGallery from "./ImageGallery";

const ProductDetails = () => {
  return (
    <section className="container mt-20">
      <div className="product-details flex gap-20">
        <ImageGallery />
        {/* Product Summary */}
        <div className="row space-y-5 mt-5 lg:max-w-[40%] flex-shrink-0">
          <h1 className="text-3xl">Lenovo – Tab P11 Plus – Tablet</h1>
          <div className="product-price flex gap-5 text-xl">
            <span className="original-price line-through">$50.00</span>
            <span className="sale-price">$40.00</span>
          </div>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </p>

          <ButtonComponent classes={"px-5"} text="Shop Now" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
