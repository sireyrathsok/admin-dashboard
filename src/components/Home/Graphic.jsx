import React from "react";
import { motion } from "framer-motion";
import AreaChartApex from "../../Charts/AreaChart";

const Graphic = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className=" bg-gray-700  w-full  pr-4 pt-4   xl:pt-10 xl:mr-0  rounded-xl "
    >
    <AreaChartApex/>
    </motion.div>
  );
};

export default Graphic;
