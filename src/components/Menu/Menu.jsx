import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../assets/icecream.jpg";
import spa from "../../assets/spa.jpg";
import ice from "../../assets/ice.jpg";
import choIce from "../../assets/choIce.jpg";
import tacco1 from "../../assets/tacco1.jpg";
import tacco2 from "../../assets/tacco2.jpg";
import bowIce from "../../assets/bowls-with-ice-cream.jpg";
import dietTacco from "../../assets/dietTacco.jpg";
import Sbread from "../../assets/bread-wooden-tray-red-white-cloth.jpg";
import sandwich1 from "../../assets/sandwich1.jpg";
import burger from "../../assets/burger.jpg";
import chwing from "../../assets/chwing.jpg";
import milktea from "../../assets/milktea.jpg";
import settacco from "../../assets/settacco.jpg";
import chFried from "../../assets/chFried.jpg";
import riceOmo from "../../assets/riceOmo.jpg";
import doubleBurger from "../../assets/doubleBurger.jpg";
import chSet from "../../assets/chSet.jpg";
import dumpling from "../../assets/dumpling.jpg";
import macaroni from "../../assets/french-colorful-macaroons.jpg";
import sushiCol from "../../assets/sushiCol.jpg";
import donut from "../../assets/donut.jpg";
import breadSet from "../../assets/breadSet.jpg";
import sushiMini from "../../assets/sushiMini.jpg";
import lateCof from "../../assets/iced-latte-coffee.jpg";
import lemondrink from "../../assets/chFried.jpg";
import meatball from "../../assets/meatball.jpg";
import porkNoo from "../../assets/porkNoo.jpg";
import SpiNoo from "../../assets/SpiNoo.jpg";
import TomYum from "../../assets/TomYum.jpg";
import americano from "../../assets/americano.jpg";
import espresso from "../../assets/espresso.jpg";

const menuList = [
  {
    imgUrl: spa,
    name: "Spagetti with Shrimp",
    price: "4.5",
    rating: 4,
    popular: false,
  },
  {
    imgUrl: ice,
    name: "Causaul Icecream",
    price: "2.5",
    rating: 3,
    popular: false,
  },
  {
    imgUrl: choIce,
    name: "Chocolate Icecream",
    price: "3.5",
    rating: "4",
    popular: false,
  },
  {
    imgUrl: tacco1,
    name: "Original tacco",
    price: "2.5",
    rating: 3,
    popular: false,
  },
  {
    imgUrl: tacco2,
    name: "Special Tacco",
    price: "4.7",
    rating: "",
    popular: false,
  },
  {
    imgUrl: bowIce,
    name: "Bowl Icecream",
    price: "4.5",
    rating: 4,
    popular: false,
  },
  {
    imgUrl: dietTacco,
    name: "Tacco For Diet",
    price: "4.7",
    rating: 4,
    popular: false,
  },
  {
    imgUrl: Sbread,
    name: "Bread",
    price: "2.2",
    rating: 3,
    popular: false,
  },
  {
    imgUrl: sandwich1,
    name: "Causual Sandwich",
    price: "2",
    rating: "4",
    popular: true,
  },
  {
    imgUrl: burger,
    name: "Spacial Burger",
    price: "5",
    rating: "5",
    popular: false,
  },
  {
    imgUrl: chwing,
    name: "Chicken Wings ",
    price: "3.5",
    rating: "4",
    popular: false,
  },
  {
    imgUrl: milktea,
    name: "Milk Tea with Pearl",
    price: "2.5",
    rating: "3",
    popular: false,
  },
  {
    imgUrl: settacco,
    name: "Tacco Friend Set",
    price: "6.5",
    rating: "5",
    popular: false,
  },
  {
    imgUrl: chFried,
    name: "Chicken Fried",
    price: "3.5",
    rating: 4,
    popular: false,
  },
  {
    imgUrl: riceOmo,
    name: "Rice with Omolet",
    price: "4.5",
    rating: "5",
    popular: false,
  },
  {
    imgUrl: doubleBurger,
    name: "Double Burger",
    price: "5.5",
    rating: "",
    popular: true,
  },
  {
    imgUrl: chSet,
    name: "Chicken + French Fried Set",
    price: "5.5",
    rating: "",
    popular: true,
  },
  {
    imgUrl: dumpling,
    name: "Japaness Dumpling",
    price: "7",
    rating: "5",
    popular: true,
  },
  {
    imgUrl: macaroni,
    name: "French Macarrom",
    price: "4",
    rating: "",
    popular: false,
  },
  {
    imgUrl: sushiCol,
    name: "Sushi Collection",
    price: "20",
    rating: "",
    popular: false,
  },
  {
    imgUrl: donut,
    name: "Sweet Donut",
    price: "3.5",
    rating: "",
    popular: false,
  },
  {
    imgUrl: breadSet,
    name: "Bread Mini Set",
    price: "4.5",
    rating: "",
    popular: false,
  },
  {
    imgUrl: sushiMini,
    name: "Sushi Mini set",
    price: "2.5",
    rating: "",
    popular: false,
  },
  {
    imgUrl: lateCof,
    name: "Iced Latte Coffee",
    price: "2.5",
    rating: "",
    popular: true,
  },
  {
    imgUrl: lemondrink,
    name: "Fresh Lemonade",
    price: "1.5",
    rating: "",
    popular: false,
  },
  {
    imgUrl: meatball,
    name: "Spicy Meatball",
    price: "2.5",
    rating: "",
    popular: true,
  },
  {
    imgUrl: porkNoo,
    name: "Pork Noodle",
    price: "3.5",
    rating: "",
    popular: false,
  },
  {
    imgUrl: SpiNoo,
    name: "Spicy Noodle + Pork",
    price: "3.5",
    rating: "",
    popular: true,
  },
  {
    imgUrl: TomYum,
    name: "Tom Yum Noodle ",
    price: "3.5",
    rating: "",
    popular: false,
  },
  {
    imgUrl: americano,
    name: "Hot Americano",
    price: "2.5",
    rating: "",
    popular: false,
  },
  {
    imgUrl: espresso,
    name: "Hot Espresso ",
    price: "2.5",
    rating: "",
    popular: true,
  },
];

const Menu = () => {
  const [isAllClicked, setAllClicked] = useState(true);
  const [isPopularClicked, setPopularClicked] = useState(false);

  const handleAllClick = () => {
    setAllClicked(true);
    setPopularClicked(false);
  };

  const handlePopularClick = () => {
    setAllClicked(false);
    setPopularClicked(true);
  };

  // const filteredMenuList = isPopularClicked
  //   ? menuList.filter((item) => item.popular)
  //   : menuList;
  return (
    <div className=" text-white sm:mb-10 ">
      <div className=" flex justify-start  sm:justify-end gap-5  text-white  mb-5  ">
        <button
          onClick={handleAllClick}
          className={` bg-orange-400 hover:bg-orange-500 px-6 py-1 rounded-lg ${
            isAllClicked ? " bg-orange-700" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={handlePopularClick}
          className={` bg-orange-400  hover:bg-orange-500 px-6 py-1 rounded-lg ${
            isPopularClicked ? " bg-orange-700" : ""
          }`}
        >
          Popular
        </button>
      </div>
      <motion.section
        layout
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
        exit={{ opacity: 0 }}
        className=" sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols- gap-8 sm:gap-10 xl:gap-12 overflow-x-hidden"
      >
        {menuList.map((item, index) => {
          {
            return (
              <>
                <AnimatePresence>
                  <motion.div
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    whileHover={{ scale: 1.01 }}
                    key={index}
                    className={`mb-16 sm:mb-0  ${isAllClicked ? "" : "hidden"}`}
                  >
                    <img
                      className=" xxs:h-[320px] xs:h-[350px] sm:h-[220px] md:h-56 lg:h-52 xl:h-60 w-full rounded-t-xl"
                      src={item.imgUrl}
                      alt="product"
                    />
                    <div className="  bg-gray-600 px-3 py-3 rounded-b-xl ">
                      <div>
                        <p className=" text-md text-gray-400">{item.name}</p>
                      </div>

                      <div className=" flex justify-between items-center">
                        <p className=" my-4 text-lg text-gray-300">
                          ${item.price}
                        </p>
                        <p className=" bg-gray-500 hover:bg-gray-400 px-3 py-1  rounded-lg">
                          Details
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* //View display when Popular is Clicked======================= */}

                {item.popular && (
                  <AnimatePresence>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      key={index}
                      className={`mb-16 sm:mb-0  ${
                        isPopularClicked ? "" : "hidden"
                      }`}
                    >
                      <img
                        className=" xxs:h-[320px] xs:h-[350px] sm:h-[220px] md:h-56 lg:h-52 xl:h-60 w-full rounded-t-xl"
                        src={item.imgUrl}
                        alt="product"
                      />
                      <div className="  bg-gray-600 px-3 py-3 rounded-b-xl ">
                        <div>
                          <p className=" text-md text-gray-400">{item.name}</p>
                        </div>

                        <div className=" flex justify-between items-center">
                          <p className=" my-4 text-lg text-gray-300">
                            ${item.price}
                          </p>
                          <p className=" bg-gray-500 hover:bg-gray-400 px-3 py-1  rounded-lg">
                            Details
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </>
            );
          }
        })}
      </motion.section>
    </div>
  );
};

export default Menu;
