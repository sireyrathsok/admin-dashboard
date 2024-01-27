import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

const DropMenu = () => {
  const custTime = [
    { id: "2018", date: "March 2018" },
    { id: "2017", date: "March 2017" },
    { id: "2016", date: "March 2016" },
  ];
  const [isClicked, setisClicked] = useState(false);
  const [selected, setselected] = useState("March 2018");
  return (
    <div className=" text-white bg-gray-700 h-20   rounded-xl">
      <main className=" flex justify-between items-center ">
        <h1 className=" font-lato text-xl ">Best Selling Product</h1>
        <button
          onClick={() => setisClicked(!false)}
          className="flex bg-gray-500 px-4 py-2 rounded-lg text-sm  gap-2"
        >
          <p className="">{selected}</p>
          <div className=" xxs:hidden xs:flex">
            <ArrowDown />
          </div>
        </button>
        <div
          className={`${
            isClicked ? "" : " hidden"
          } absolute z-50 right-[53px] xl:right-[65px] text-sm mt-[200px] bg-gray-500  rounded-lg `}
        >
          {custTime.map((item, index) => {
            return (
              <div key={index}>
                <p
                  onClick={() => {
                    setisClicked(false), setselected(item.date);
                  }}
                  className=" my-3 hover:bg-gray-400 xxs:px-[16px] xs:px-[31px] py-2"
                >
                  {item.date}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default DropMenu;
