import React from "react";
import AreaChart from "../../Charts/AreaChart";
import { motion } from "framer-motion";

const Graphic = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className=" bg-gray-700  w-full  pr-4 pt-4   xl:pt-10 xl:mr-0  rounded-xl "
    >
      <AreaChart />
    </motion.div>
  );
};

export default Graphic;
