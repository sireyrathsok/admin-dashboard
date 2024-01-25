import {
  Computer,
  Menu,
  MenuIcon,
  PieChart,
  Search,
  ShoppingBag,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [toggle, settoggle] = useState(true);
  const [isSearch, setisSearch] = useState(false);
  const location = useLocation();
  return (
    <>
      <div
        className={` text-gray-500 font-extrabold flex gap-5 ml-10 mt-7 ${
          toggle ? "" : "hidden"
        }`}
      >
        <MenuIcon onClick={() => settoggle(false)} />
        <Search onClick={() => setisSearch(true)} />
        {/* {isSearch && (
          <div initial={{ y: "-100vw" }} animate={{ y: 0 }}>
            <input type="text" />
          </div>
        )} */}
      </div>

      <section
        transition={{ type: "spring", stiffness: 100 }}
        className={` fixed z-50 pt-7 pl-10 pr-10 bg-gray-800 h-screen ${
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
          <p className="text-sub-title-side mt-10 mb-6 uppercase">Overviews</p>

          {sidebar.map((item, index) => {
            return (
              <motion.div whileHover={{ scale: 1.09 }}>
                <Link
                  key={index}
                  to={`${item.path}`}
                  className={`flex gap-3 mb-5 text-white pl-2 py-2 rounded-lg  hover:bg-gray-600 ${
                    location.pathname === item.path ? " bg-gray-600" : ""
                  } `}
                >
                  {item.icons}
                  <p>{item.label}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SideBar;
