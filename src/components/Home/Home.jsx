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
      <div className=" xl:flex gap-5 h-fit  ">
        <div className="mb-5 xl:mb-0   ">
          <Layer1 />
        </div>

        <Graphic />
      </div>
      <div className=" flex gap-5   w-full  mt-5   ">
        <div className=" bg-gray-700 px-6 pt-4 w-2/5 rounded-xl  ">
          <BarChartApex />
        </div>
        <div className=" bg-gray-700 rounded-xl w-3/5 ">
          {/* <PerformanceTable /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
