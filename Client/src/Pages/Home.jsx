import Navbar from "../Components/Defaults/Navbar/Navbar.jsx";
import ProductCard from "@/Components/ProductCard.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-4 flex-wrap container mx-auto">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
