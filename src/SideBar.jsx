import {
  BarChart,
  BarChart2Icon,
  Bell,
  Columns2Icon,
  Computer,
  CreditCard,
  DollarSign,
  IceCream,
  LayoutDashboard,
  ListChecks,
  ListFilter,
  Magnet,
  MenuIcon,
  MenuSquareIcon,
  MessageCircle,
  PieChart,
  PieChartIcon,
  PlaneTakeoff,
  Search,
  SearchCheck,
  ShoppingBag,
  UserCheck,
  ZoomOut,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import user from "../src/assets/user.jpg";
import Menu from "./components/Menu/Menu";
const sidebar = [
  {
    icons: <LayoutDashboard />,
    label: "Dashboard",
    path: "/",
  },

  {
    icons: <MenuSquareIcon />,
    label: "Menu",
    path: "/menu",
  },
  {
    icons: <CreditCard />,
    label: "Customer",
    path: "/vip",
  },
  {
    icons: <PieChartIcon />,
    label: "Pie Chart",
    path: "/piechart",
  },
  {
    icons: <DollarSign />,
    label: "Revenue",
    path: "/columnchart",
  },
];
function SideBar() {
  const checkSideBar = () => {
    OpenSideBar ? setOpenSideBar(!true) : setOpenSideBar(true);
  };
  const [OpenSideBar, setOpenSideBar] = useState(true);

  const location = useLocation();
  return (
    <div  className=" flex min-full w-fit ">
      <section
        transition={{ type: "spring", stiffness: 100 }}
        className={` pt-7 pl-10 xxs:pll7 pr-10 bg-gray-800 h-screen ${
          OpenSideBar ? "" : "hidden"
        } `}
      >
        <Link to={"/"} className=" flex items-start">
          <p className="font-lato  text-3xl font-extrabold bg-gradient-to-br from-cyan-400 from-50% via-orange-500 via-40% to-yellow-200 bg-clip-text text-transparent">
            MY Coffee
          </p>
          {/* <Menu
            onClick={() => settoggle(true)}
            className=" mt-2  ml-10 text-white "
          /> */}
        </Link>

        <div className="  ">
          <p className="text-sub-title-side mt-10 mb-6 uppercase">Admin</p>

          {sidebar.map((item, index) => {
            return (
              <motion.div key={index} whileHover={{ scale: 1.09 }}>
                <Link
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
      <p  onClick={checkSideBar} className=" bg-gray-400 opacity-5 w-[4000px] mt-[90px]"></p>
      {/* Nav bar================================= */}
      <div  
     
        className={` fixed   flex pt-8 pb-5   justify-between  shadxl h-fit w-full bg-gray-900   ${
          OpenSideBar ? "left-[250px]" : "ml-7 xl:ml-10"
        }`}
      >
        <div className={` flex  text-gray-600  font-extrabold`}>
          <MenuIcon
            onClick={checkSideBar}
            className=" mt-1 hover:text-gray-400"
          />
          <input
            type="text"
            placeholder="search"
            className={`font-thin  rounded-md pl-2 py-2 w-56 sm:bg-gray-600 mx-4 h-fit grow bg-gray-600 shadow-lg ${
              OpenSideBar ? "hidden" : ""
            }`}
          />
          <div  onClick={()=> setOpenSideBar(!true)} className={` hover:text-gray-400 ${OpenSideBar ? " " : "hidden"} ml-3 mt-1`}>
            <Search />
          </div>

          <div  onClick={()=> setOpenSideBar(!true)}
            className={` hidden sm:flex sm:fixed   z-50 right-0 bg-gray-900 shadow-xl  gap-7 pr-10 top-0 pt-9 pb-5   text-gray-600 ${
              OpenSideBar ? " gap-0" : ""
            }`}
          >
            <MessageCircle className=" hover:text-gray-400" />
            <Bell className=" hover:text-gray-400" />
            <img
              className=" w-[27px] h-[27px] ring-white hover:ring-blue-300 ring-2 rounded-full"
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
