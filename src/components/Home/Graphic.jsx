import React from "react";
import AreaChart from "../../Charts/AreaChart";
import { motion } from "framer-motion";

const Graphic = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className=" bg-gray-700  w-full  pr-4  rounded-xl "
    >
      <AreaChart />
    </motion.div>
  );
};

export default Graphic;
