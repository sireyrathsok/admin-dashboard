import React from "react";
import { motion } from "framer-motion";
import SvgHero from "../SvgHero";
import { DollarSign, ShoppingBag } from "lucide-react";
import SvgWave from "./SvgWave";

const Layer1 = () => {
  return (
    <div className="  text-white bg-cover  top-20">
      <motion.section
        whileHover={{ scale: 1.01 }}
        className=" bg-gray-700  px-12 py-7 rounded-xl w-full "
      >
        <div className=" flex items-center gap-28  ">
          <div className=" grow ">
            <p className=" font-semibold text-2xl min-w-72 ">
              Congratulation Andrie
            </p>
            <div className=" flex gap-2 font-semibold items-baseline my-6 ">
              <p className=" font-bold text-2xl">$39,358</p>
              <p className=" flex text-xs text-green-600">+9%</p>
            </div>
            <button className=" bg-orange-600 py-2 px-4 rounded-lg">
              Download
            </button>
          </div>
          <div className=" w-56 ">
            <SvgHero />
          </div>
        </div>
      </motion.section>
      <div className=" flex justify-between gap-4  mt-4 w-auto">
        <motion.section
          whileHover={{ scale: 1.05 }}
          className=" flex justify-between items-start bg-gray-700 px-12 py-7 w-1/2 rounded-2xl "
        >
          <div className=" ">
            <p className=" font-semibold text-xl ">Revenues</p>
            <div className=" flex gap-2 font-semibold items-baseline mt-6 mb-3 ">
              <p className=" font-bold text-2xl">$93,358.73</p>
              <p className=" flex text-xs text-green-600">+9%</p>
            </div>
            <p className=" text-sm font-thin">Monthly Revenues</p>
          </div>

          <DollarSign
            width={40}
            height={40}
            className=" shadow-lg rounded-full bg-yellow-500 my-1 py-1"
          />
        </motion.section>
        <motion.section
          whileHover={{ scale: 1.05 }}
          className="  bg-gray-700  w-1/2 rounded-2xl "
        >
          <div className=" flex justify-between items-start  py-7 px-12">
            <div className=" ">
              <p className="  text-lg ">Monthly Sales</p>
              <div className=" flex gap-2 font-semibold items-baseline mt-1 ">
                <p className=" font-bold text-2xl">3,246</p>
                <p className=" flex text-xs text-green-600">+0.1%</p>
              </div>
            </div>

            <ShoppingBag
              width={40}
              height={40}
              className=" shadow-lg rounded-full bg-cyan-500 px-1 my-1"
            />
          </div>
          <div className=" ">
            <SvgWave />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Layer1;
