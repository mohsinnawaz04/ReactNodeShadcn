import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import HeroAside from "./HeroAside";
import HeroMain from "./HeroMain";
import ButtonComponent from "../Defaults/Button/ButtonComponent";
import CategoryCard from "./CategoryCard";
import TimeButton from "../Defaults/Button/TimeButton";
import PortfolioCard from "../Defaults/Cards/PortfolioCard";
import TweetCarousel from "../Defaults/Carousels/TweetCarousel";
import { Input } from "../ui/input";
import { Headset, MoveRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Separator } from "../ui/separator";

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
      <section className="container mx-auto mt-20">
        <div className="row flex gap-5">
          <HeroMain />
          <HeroAside />
        </div>
      </section>

      <section className="container mx-auto mt-20">
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

      <section className="container mx-auto mt-20 popular-categories bg-zinc-800 bg-opacity-60 ps-10 rounded-2xl">
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

      <section className="container mx-auto mt-20 limited-time bg-zinc-800 px-16 py-5 rounded-2xl">
        <div className="grid grid-cols-12 gap-20">
          <div className="col col-span-4 py-10">
            <h4 className="uppercase">Limited Time Offer</h4>
            <h2 className="text-4xl font-semibold mt-2 mb-7">
              Grab Your Favorites at Our Fashion Sale!
            </h2>
            <div className="row grid grid-cols-12 gap-5">
              <div className="col col-span-3">
                <TimeButton time={44} timeUnit={"Days"} />
              </div>
              <div className="col col-span-3">
                <TimeButton time={18} timeUnit={"Hours"} />
              </div>
              <div className="col col-span-3">
                <TimeButton time={49} timeUnit={"Minutes"} />
              </div>
              <div className="col col-span-3">
                <TimeButton time={35} timeUnit={"Seconds"} />
              </div>
            </div>
            <ButtonComponent
              classes={"uppercase mt-10 px-7 py-5"}
              text="Grab Your Favorites"
            />
          </div>
          <div className="col col-span-8">
            <div className="row flex justify-between">
              {Array(3)
                .fill(null)
                .map((_, idx) => (
                  <ProductCard key={idx} isSale={idx === 0} />
                ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-20 portfolio">
        <div className="grid grid-cols-12 gap-10">
          <div className="col col-span-8">
            <div className="grid grid-cols-12 gap-5 relative">
              <div className="instagram-card absolute flex flex-col justify-between items-center bg-[#171717] max-w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-3 p-10 px-14 rounded-2xl">
                <h4 className="uppercase text-[#5DBDAC] font-semibold">
                  Instagram
                </h4>
                <h3 className="font-semibold">@insta_username</h3>
                <p className="text-center opacity-70 font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              {Array(8)
                .fill(null)
                .map((_, idx) => (
                  <PortfolioCard key={idx} />
                ))}
            </div>
          </div>
          <div className="col col-span-4 tweet-carousel rounded-2xl bg-[#5DBDAC] bg-opacity-20">
            <TweetCarousel />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20 newsletter">
        <div className="grid grid-cols-12">
          <div className="col col-span-6 bg-[#202020] flex flex-col justify-center items-start gap-5 px-24 w-full rounded-l-2xl overflow-hidden">
            <h4 className="uppercase text-[#5DBDAC]">Newsletter</h4>
            <h2 className="text-4xl font-semibold">Signup & Get 10 % Off</h2>
            <p className="opacity-80 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="inquiry w-full flex justify-between gap-2">
              <Input
                type="text"
                placeholder="Email"
                className="p-5 bg-white bg-opacity-10 border-none"
              />
              <ButtonComponent
                classes={"uppercase px-7 py-5 bg-white bg-opacity-10"}
              >
                <MoveRight color="#5DBDAC" />
              </ButtonComponent>
            </div>
          </div>
          <div className="col col-span-6 rounded-r-2xl overflow-hidden">
            <div className="img-wrapper">
              <img
                src="images/newsletter/01.png"
                className="w-full"
                alt="Cover Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 py-10 footer">
        <div className="grid grid-cols-12">
          <div className="row flex justify-between col-span-12">
            <div className="left flex items-center gap-10">
              <h2 className="logo bg-[#5DBDAC] px-5 text-2xl font-bold leading-9 tracking-wider rounded-lg">
                LOGO
              </h2>
              <div className="support-info flex items-center gap-3">
                <Headset size={30} color="#75BBAD" />
                <h6 className="support-email text-sm">
                  support@storemail.com <br /> <span>1234567890</span>
                </h6>
              </div>
            </div>
            <div className="right flex items-center gap-5">
              <FaFacebook className="facebook opacity-50" size={20} />
              <FaYoutube className="youtube opacity-50" size={23} />
              <FaInstagram className="instagram opacity-50" size={20} />
            </div>
          </div>

          <div className="row grid grid-cols-12 col-span-12 mt-20">
            <div className="left about-info col-span-3 space-y-5">
              <h4 className="font-semibold text-xl">About Us</h4>
              <p className="opacity-80 font-light pr-12">
                Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus,
                luctus nec lamcorper mattis, pulvinar dapibus leo.
              </p>
              <Separator className="opacity-10" />

              <div className="flex items-center gap-5">
                <div className="img-wrapper">
                  <img
                    src="images/footer/shopping-bag.png"
                    alt="Shopping Bag"
                  />
                </div>
                <p className="leading-5 font-light">
                  15 days return policy <br />{" "}
                  <span className="opacity-80">from receiving your order</span>
                </p>
              </div>
            </div>
            <div className="right links col-span-9 flex justify-evenly items-start">
              <div className="col space-y-5">
                <h4>Here to Help</h4>
                <ul className="opacity-60 font-light text-sm space-y-2">
                  <li>Help & contact us</li>
                  <li>Our stories</li>
                  <li>Our services</li>
                  <li>Customer services</li>
                  <li>Track your order</li>
                  <li>Delivery & collection</li>
                  <li>Returns & refunds</li>
                </ul>
              </div>
              <div className="col space-y-5">
                <h4>Shopping</h4>
                <ul className="opacity-60 font-light text-sm space-y-2">
                  <li>Wish list</li>
                  <li>Buying guides</li>
                  <li>Inspiration</li>
                  <li>Gift cards & vouchers</li>
                  <li>Shop by brand</li>
                  <li>Secure shopping</li>
                </ul>
              </div>
              <div className="col space-y-5">
                <h4>Company</h4>
                <ul className="opacity-60 font-light text-sm space-y-2">
                  <li>Contributions</li>
                  <li>Company information</li>
                  <li>Investor relations</li>
                  <li>Logo and media</li>
                  <li>Our blog</li>
                  <li>Supply chain</li>
                  <li>Special events</li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom col-span-12 mt-20 space-y-5">
              <Separator className="opacity-10" />
              <div className="flex opacity-50 font-light text-sm">
                <p>© Copyright 2024 | all rights reserved.</p>
                <ul className="flex gap-5 ml-auto">
                  <li>Terms & conditions</li>
                  <li>Privacy</li>
                  <li>Cookies</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroComponet;
