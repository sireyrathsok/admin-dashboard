import React from "react";
import Layer1 from "./Layer1";
import Graphic from "./Graphic";
import PieChart from "../../Charts/PieChart";
import { motion } from "framer-motion";
import { BarChart } from "lucide-react";
import BarChartApex from "../../Charts/BarChartApex";
import PerformanceTable from "./PerformanceTable";

const Home = () => {
  return (
    <div className=" bg-gray-900 absolute right-0 px-7  xl:px-10 mt-20  w-full">
      <div className=" xl:flex gap-5 xl:gap-5 h-fit  ">
        <div className="mb-5 xl:mb-0   ">
          <Layer1 />
        </div>

        <Graphic />
      </div>
      <div className=" xl:flex lg:flex h-min gap-5 w-full mt-5">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className=" bg-gray-700 px-6  xl:w-2/5 w-full rounded-xl  "
        >
          <BarChartApex />
        </motion.div>
        <div
          whileHover={{ scale: 1.01 }}
          className=" bg-gray-700 mt-5 lg:mt-0  xl:mt-0 w-full xl:w-3/5  rounded-xl "
        >
          <PerformanceTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
