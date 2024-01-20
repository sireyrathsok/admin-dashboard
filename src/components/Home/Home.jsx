import React from "react";
import Layer1 from "./Layer1";
import Graphic from "./Graphic";
import PieChart from "../../Charts/PieChart";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className=" bg-gray-900 absolute right-0 px-7  xl:px-10 mt-20  w-full">
      <div className=" xl:flex ">
        <div className=" lg:mr-4  mb-5 xl:mb-0    ">
          <Layer1 />
        </div>
        <Graphic />
      </div>
      <motion.div className=" bg-gray-700 mt-5 w-fit  rounded-2xl">
        <PieChart />
      </motion.div>
    </div>
  );
};

export default Home;
