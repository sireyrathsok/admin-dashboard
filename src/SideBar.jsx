import {
  Bell,
  Computer,
  LayoutDashboard,
  Magnet,
  MenuIcon,
  MessageCircle,
  PieChart,
  Search,
  SearchCheck,
  ShoppingBag,
  ZoomOut,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import user from "../src/assets/user.jpg";
const sidebar = [
  {
    icons: <LayoutDashboard />,
    label: "Dashboard",
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
function SideBar() {
  const checkSideBar = () => {
    OpenSideBar ? setOpenSideBar(!true) : setOpenSideBar(true);
  };
  const [OpenSideBar, setOpenSideBar] = useState(true);

  const location = useLocation();
  return (
    <div className="fixed z-50  w-full  flex">
      <section
        transition={{ type: "spring", stiffness: 100 }}
        className={` pt-7 pl-10 pr-10 bg-gray-800 h-screen ${
          OpenSideBar ? "" : "hidden"
        } `}
      >
        <Link to={"/"} className=" flex items-start">
          <p className="font-lato  text-3xl font-extrabold bg-gradient-to-br from-cyan-400 from-50% via-orange-500 via-40% to-yellow-200 bg-clip-text text-transparent">
            Pursify
          </p>
          {/* <Menu
            onClick={() => settoggle(true)}
            className=" mt-2  ml-10 text-white "
          /> */}
        </Link>

        <div className=" ">
          <p className="text-sub-title-side mt-10 mb-6 uppercase">Overviews</p>

          {sidebar.map((item, index) => {
            return (
              <motion.div whileHover={{ scale: 1.09 }}>
                <Link
                  key={index}
                  to={`${item.path}`}
                  className={`flex gap-3 mb-5 text-white pl-2 pr-9  py-2 rounded-lg  hover:bg-gray-600 ${
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

      {/* Nav bar================================= */}
      <div
        className={` flex pt-8 pb-5   justify-between bg-gray-900 shadxl h-fit  w-full ${
          OpenSideBar ? "pl-5" : "pl-6 xl:pl-10"
        }`}
      >
        <div className={` flex  text-gray-600  font-extrabold`}>
          <MenuIcon onClick={checkSideBar} className=" mt-1" />
          <input
            type="text"
            placeholder="search"
            className={`font-thin sm:hidden  md:flex rounded-md pl-2 py-2 w-56 sm:bg-gray-600 mx-4 h-fit grow bg-gray-600 shadow-lg ${
              OpenSideBar ? "hidden" : ""
            }`}
          />
          <div
            className={` pt-1 ml-4 md:hidden ${
              OpenSideBar ? "flex" : "hidden"
            }`}
          >
            <Search />
          </div>

          <div
            className={` fixed z-50 right-0 bg-gray-900 shadow-xl flex gap-7 pr-10 top-0 pt-9 pb-8   text-gray-600 ${
              OpenSideBar ? "hidden" : ""
            }`}
          >
            <MessageCircle />
            <Bell />
            <img
              className=" w-[27px] h-[27px] ring-white ring-2 rounded-full"
              src={user}
              alt="user profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
