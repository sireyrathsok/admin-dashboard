import {
  Computer,
  Menu,
  MenuIcon,
  PieChart,
  Search,
  ShoppingBag,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sidebar = [
  {
    icons: <Computer />,
    label: "Modern",
    path: "/",
  },
  {
    icons: <PieChart />,
    label: "Analytical",
    path: "/analyze",
  },
  {
    icons: <ShoppingBag />,
    label: "eCommerce",
    path: "/ecommerce",
  },
];
const SideBar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <div
        className={` text-gray-500 font-extrabold flex gap-5 ml-10 mt-7 ${
          toggle ? "" : "hidden"
        }`}
      >
        <MenuIcon onClick={() => settoggle(false)} />
        <Search />
      </div>

      <motion.section
        transition={{ type: "spring", stiffness: 100 }}
        className={`pt-7 pl-10 pr-10 bg-gray-800 h-screen ${
          toggle ? "hidden" : ""
        }  `}
      >
        <Link to={"/"} className=" flex items-start">
          <p className="font-lato  text-3xl font-extrabold bg-gradient-to-br from-cyan-400 from-50% via-orange-500 via-40% to-yellow-200 bg-clip-text text-transparent">
            Pursify
          </p>
          <Menu
            onClick={() => settoggle(true)}
            className=" mt-2  ml-10 text-white "
          />
        </Link>

        <div className=" ">
          <p className="text-sub-title-side mt-10 mb-6 ">DASHBOARDS</p>

          {sidebar.map((item, index) => {
            return (
              <Link
                key={index}
                to={`${item.path}`}
                className=" flex gap-3 mb-8 text-white"
              >
                {item.icons}
                <p>{item.label}</p>
              </Link>
            );
          })}
        </div>
      </motion.section>
    </>
  );
};

export default SideBar;
