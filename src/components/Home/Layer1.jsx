import React from "react";
import { motion } from "framer-motion";
import SvgHero from "../SvgHero";
import { DollarSign, ShoppingBag } from "lucide-react";
import SvgWave from "./SvgWave";

const Layer1 = () => {
  return (
    <div className=" md:flex lg:flex   xl:flex-col text-white bg-cover   ">
      <motion.section
        whileHover={{ scale: 1.01 }}
        className=" bg-gray-700 xl:w-fit xl:pl-12 md:pl-5 md:mr-0  pl-8  py-7 rounded-xl "
      >
        <div className=" flex xl:justify-between md:  items-center md:w-fit lg:gap-16  xl:gap-44  xl:w-fit   md:gap-5   gap-0  ">
          <div className=" w-1/2  xl:grow ">
            <p className=" font-semibold md:text-2xl text-xl min-w-72 ">
              Congratulation
            </p>
            <div className=" flex gap-2 font-semibold items-baseline my-6 ">
              <p className=" font-bold text-2xl">$39,358</p>
              <p className=" flex text-xs text-green-600">+9%</p>
            </div>
            <button className=" bg-orange-500 py-2 px-4 rounded-lg">
              Download
            </button>
          </div>
          <div className=" grow   lg:w-full xl:min-w-56 ">
            <SvgHero />
          </div>
        </div>
      </motion.section>
      <div className=" xl:flex sm:flex   sm:mt-5 md:mt-0  md:w-full xl:justify-between gap-4 md:gap-0 xl:gap-4   xl:mt-4 w-auto">
        <motion.section
          whileHover={{ scale: 1.05 }}
          className=" flex justify-between  items-start my-4  sm:my-0 xl:my-0 bg-gray-700 xl:px-12 md:px-5 md:mx-4 xl:mx-0  px-8 py-7 sm:w-1/2 rounded-2xl "
        >
          <div className=" ">
            <p className=" font-semibold text-xl ">Revenues</p>
            <div className=" flex  font-semibold items-baseline mt-6 mb-3 ">
              <p className=" font-bold text-xl">$93,358.73</p>
              <p className=" flex text-xs text-green-600">+9%</p>
            </div>
            <p className=" text-sm font-thin">Monthly Revenues</p>
          </div>

          <DollarSign
            width={40}
            height={40}
            className="  lg:flex shadow-lg rounded-full bg-yellow-500 my-1 py-1"
          />
        </motion.section>
        <motion.section
          whileHover={{ scale: 1.05 }}
          className="  bg-gray-700   sm:w-1/2 rounded-2xl "
        >
          <div className=" flex justify-between items-start  py-7 xl:px-12 md:px-5 px-8">
            <div className=" bgre ">
              <p className="  text-xl ">Monthly Sales</p>
              <div className=" flex gap-2 font-semibold items-baseline mt-1 ">
                <p className=" font-bold text-xl">3,246</p>
                <p className=" flex text-xs text-green-600">+0.1%</p>
              </div>
            </div>

            <ShoppingBag
              width={40}
              height={40}
              className=" md:hidden  lg:flex shadow-lg rounded-full bg-cyan-500 px-1 my-1"
            />
          </div>
          <div className="    ">
            <SvgWave />
            {/* <BasicChart /> */}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Layer1;
