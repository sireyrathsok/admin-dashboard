import { ArrowDown } from "lucide-react";
import React from "react";
import { useState } from "react";
import DropMenu from "./DropMenu";
import icecream from "../../assets/icecream.jpg";
import burger from "../../assets/burger.jpg";
import salad from "../../assets/salad.jpg";
import sandwich from "../../assets/sandwich.jpg";
import steak from "../../assets/steak.jpg";

const tableData = [
  {
    imgURL: icecream,
    name: "Chocolate Icecream ",
    price: "3.5$",
    sale: 300,
    profit: "600.76$",
  },
  {
    imgURL: burger,
    name: "Spicy Burger ",
    price: "3.5$",
    sale: 300,
    profit: "600.76$",
  },
  {
    imgURL: salad,
    name: "Healthy Salad  ",
    price: "3.5$",
    sale: 300,
    profit: "600.76$",
  },
  {
    imgURL: sandwich,
    name: "Sandwich set ",
    price: "3.5$",
    sale: 300,
    profit: "600.76$",
  },
  {
    imgURL: steak,
    name: "favorite steak set",
    price: "18.8$",
    sale: 200,
    profit: "680.76$",
  },
];

const PerformanceTable = () => {
  return (
    <div className=" px-6 py-4 text-gray-400">
      <DropMenu />

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 pb-3 ">
                Product
              </th>
              <th scope="col" class="px-6 pb-3">
                Price
              </th>
              <th scope="col" class="px-6 pb-3">
                Sold
              </th>
              <th scope="col" class="px-6 pb-3">
                Profit
              </th>
            </tr>
          </thead>

          {tableData.map((item) => {
            return (
              <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class=" flex items-center  gap-2 px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      src={item.imgURL}
                      alt="img"
                      className=" w-8 h-8 rounded-full"
                    />
                    {item.name}
                  </th>
                  <td class="px-6 py-4">{item.price}</td>
                  <td class="px-6 py-4">{item.sale}</td>
                  <td class="px-6 py-4">{item.profit}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default PerformanceTable;
