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
import ProductsList from "../Products/ProductsList";
import { useNavigate } from "react-router-dom";

const HeroComponet = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="container mx-auto mt-20">
        <div className="row flex gap-5 flex-col xl:flex-row">
          <HeroMain />
          <HeroAside />
        </div>
      </section>

      <section className="container mx-auto mt-20">
        <div className="product-catalogue mt-20 text-center">
          <h2 className="mt-10 mb-5 text-4xl font-semibold">New Arrivals</h2>
          <ProductsList />
        </div>
      </section>

      <section className="container mx-auto mt-20 popular-categories bg-zinc-800 bg-opacity-60 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="text left py-10 col-span-12 order-2 px-7 md:px-16 2xl:col-span-8 2xl:order-[unset]">
            <div className="grid grid-cols-12 space-y-10 lg:space-y-0">
              <div className="flex items-start justify-between space-y-5 col-span-12 flex-wrap lg:flex-nowrap lg:col-span-4 lg:flex-col">
                <h2 className="text-4xl font-bold lg:mr-6">
                  Popular Categories
                </h2>
                <p className="lg:pe-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus luctus ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <ButtonComponent
                  classes={"uppercase bg-white bg-opacity-50 px-5"}
                  text="Shop Now"
                />
              </div>

              <div className="col-span-12 lg:col-span-8">
                <div className="grid sm:grid-cols-2 gap-5">
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

          <div className="poster right relative bg-[#395C56] py-10 px-7 md:px-16 col-span-12 lg:py-20 2xl:col-span-4 2xl:rounded-r-2xl">
            <div className="poster-img img-wrapper opacity-80 sm:opacity-100 aspect-video absolute top-0 z-0 h-full left-1/2 -translate-x-1/2 lg:aspect-auto 2xl:left-0 2xl:-translate-x-0">
              <img
                src="images/popular-categories/poster.png"
                alt="Poster Image"
              />
            </div>
            <div className="h-full flex flex-col pb-10 justify-end items-start z-20 relative">
              <h4 className="sub-heading uppercase text-lg tracking-wide font-semibold mt-auto">
                Step into savings
              </h4>
              <h2 className="heading text-4xl font-bold tracking-wide my-5 max-w-[20ch] 2xl:max-w-max">
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
        <div className="grid grid-cols-2 gap-10 px-5 xl:px-0 2xl:gap-0">
          <div className="col-span-2 order-2 hidden xl:order-[unset] xl:col-span-1 lg:block">
            <div className="img-wrapper rounded-2xl overflow-hidden">
              <img
                src="images/suggestions/keyboard-button.png"
                className="keyboard-img w-full xl:w-auto"
                alt="Keyboard Button"
              />
            </div>
          </div>

          <div className="col-span-2 xl:col-span-1 flex flex-col justify-between items-start space-y-10 xl:space-y-0">
            <div className="text-card space-y-10 xl:px-10 lg:py-10">
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
            <div className="images-card flex flex-wrap justify-center sm:justify-normal lg:flex-nowrap gap-5">
              <div className="img-wrapper w-full lg:w-[300px] xl:w-auto">
                <img
                  src="images/suggestions/carousel-img-1.png"
                  className="w-full"
                  alt="Product Card Image"
                />
              </div>
              <div className="img-wrapper w-full lg:w-[300px] xl:w-auto">
                <img
                  src="images/suggestions/carousel-img-2.png"
                  className="w-full"
                  alt="Product Card Image"
                />
              </div>
              <div className="img-wrapper w-full lg:w-[300px] xl:w-auto">
                <img
                  src="images/suggestions/carousel-img-3.png"
                  className="w-full"
                  alt="Product Card Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 limited-time bg-zinc-800 px-5 sm:px-10 lg:px-16 py-5 rounded-2xl">
        <div className="grid grid-cols-12 lg:gap-10 2xl:gap-20">
          <div className="py-10 col col-span-12 xl:col-span-4">
            <h4 className="uppercase">Limited Time Offer</h4>
            <h2 className="text-3xl font-semibold mt-2 mb-7 sm:text-4xl">
              Grab Your Favorites at Our Fashion Sale!
            </h2>
            <div className="row flex gap-1 flex-wrap 2xl:justify-between 2xl:flex-nowrap">
              <div className="flex-shrink-0 w-20 sm:w-24">
                <TimeButton time={44} timeUnit={"Days"} />
              </div>
              <div className="flex-shrink-0 w-20 sm:w-24">
                <TimeButton time={18} timeUnit={"Hours"} />
              </div>
              <div className="flex-shrink-0 w-20 sm:w-24">
                <TimeButton time={49} timeUnit={"Minutes"} />
              </div>
              <div className="flex-shrink-0 w-20 sm:w-24">
                <TimeButton time={35} timeUnit={"Seconds"} />
              </div>
            </div>
            <ButtonComponent
              classes={"uppercase mt-10 px-7 py-5"}
              text="Grab Your Favorites"
            />
          </div>
          <div className="col col-span-12 xl:col-span-8">
            <div className="row flex gap-5 flex-wrap justify-center lg:flex-nowrap md:justify-between">
              {Array(3)
                .fill(null)
                .map((_, idx) => (
                  <ProductCard key={idx} isSale={idx === 0} />
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 portfolio">
        <div className="grid grid-cols-12 gap-0 px-5 xl:gap-10 xl:px-0">
          <div className="col col-span-12 order-2 mt-10 xl:col-span-8 xl:mt-0 xl:order-[unset]">
            <div className="grid grid-cols-12 gap-5 relative">
              <div className="instagram-card absolute flex flex-col justify-between items-center bg-[#171717] w-4/5 max-h-60 sm:max-h-[unset] overflow-scroll scrollbard-hide md:w-full max-w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-3 p-10 px-14 rounded-2xl">
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
          <div className="col col-span-full tweet-carousel rounded-2xl bg-[#5DBDAC] bg-opacity-20 xl:col-span-4">
            <TweetCarousel />
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 newsletter">
        <div className="grid grid-cols-12 px-5">
          <div className="col col-span-full bg-[#202020] flex flex-col justify-center items-start gap-5 px-10 py-20 w-full overflow-hidden rounded-2xl lg:rounded-none lg:rounded-l-2xl lg:py-10 lg:px-24 lg:col-span-8 xl:col-span-6">
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
          <div className="col col-span-full overflow-hidden rounded-none hidden lg:block lg:rounded-r-2xl lg:col-span-4 xl:col-span-6">
            <div className="img-wrapper h-full">
              <img
                src="images/newsletter/01.png"
                className="w-full object-cover"
                alt="Cover Image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 py-10 px-5 footer">
        <div className="grid grid-cols-12">
          <div className="row flex flex-wrap justify-between gap-10 col-span-12">
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
            <div className="left about-info col-span-12 sm:col-span-6 lg:col-span-3 space-y-5">
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

            <div className="right links col-span-12 mt-20 flex flex-wrap justify-stretch gap-10 items-start lg:mt-0 sm:justify-between lg:justify-evenly lg:col-span-9">
              <div className="col space-y-5 flex-shrink-0 flex-grow-[1] sm:flex-grow-0">
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
              <div className="flex flex-wrap justify-center md:justify-between gap-5 md:gap-10 opacity-50 font-light text-sm">
                <p className="flex-shrink-0">
                  © Copyright 2025 | all rights reserved.
                </p>
                <ul className="flex flex-wrap justify-center gap-5 md:ml-auto">
                  <li>Terms & conditions</li>
                  <li>Privacy</li>
                  <li>Cookies</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroComponet;
