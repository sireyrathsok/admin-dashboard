import React from "react";
import user1 from "../assets/user/user1.jpg"
import user2 from "../assets/user/user2.jpg"
import user3 from "../assets/user/user3.jpg"
import user4 from "../assets/user/user4.jpg"
import user5 from "../assets/user/user5.jpg"
import user6 from "../assets/user/user6.jpg"
import user7 from "../assets/user/user7.jpg"
import user8 from "../assets/user/user8.jpg"
import user9 from "../assets/user/user9.jpg"
import user10 from "../assets/user/user10.jpg"

const CustmerList =[
{
  name:"Ava Johnsom",
  email:"ava@gmail.com",
  age:"17",
  latest:"10-june-2023",
  profile: user1
},
{
  name:"Ethan Rodrigo",
  email:"ethan@gmail.com",
  age:"19",
  latest:"03-feb-2023",
  profile: user2
},
{
  name:"Isabella Chen",
  email:"isabella@gmail.com",
  age:"22",
  latest:"15-jan-2023",
  profile: user3
},
{
  name:"Liam Thompson",
  email:"liam@gmail.com",
  age:"21",
  latest:"21-jun-2023",
  profile: user4
},
{
  name:"Sophia Patel",
  email:"sophia@gmail.com",
  age:"20",
  latest:" 12-jun-2022",
  profile: user5
},
{
  name:"Mia Davis",
  email:"miadavis@gmail.com",
  age:"24",
  latest:"02-mar-2023",
  profile: user6
},
{
  name:"Noah Williams",
  email:"noah@gmail.com",
  age:"20",
  latest:"22-mar-2022",
  profile: user7
},
{
  name:"Oliver Lee",
  email:"oliver@gmail.com",
  age:"19",
  latest:"12-apr-2023",
  profile: user8
},
{
  name:"Emma Smith",
  email:"emma@gmail.com",
  age:"26",
  latest:"20-jun-2023",
  profile: user9
},
{
  name:"Lucas Miller",
  email:"lucas@gamil.com",
  age:"23",
  latest:"25-jun-2023",
  profile: user10
},
]
const VipCustomer = () => {
  return (
    <div className="relative overflow-x-auto shadow-md pb-8 rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-00  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th  scope="col" className=" px-6 py-3"><input type="checkbox"/></th>
              <th scope="col" class="px-6 py-3 ">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
               Email
              </th>
              <th scope="col" class="px-6 py-3">
                Age       
              </th>
              <th scope="col" class="px-6 py-3">
                Last Order
              </th>
              <th scope="col" class="px-6 py-3">
              Action
              </th>
            </tr>
          </thead>

          {CustmerList.map((item, index) => {
            return (
              <tbody key={index} >
                
                <tr className="odd:bg-gray-600  odd:dark:bg-gray-600  even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className=" px-6 py-4"> <input type="checkbox"/></td>
                  <th
                    scope="row"
                    className=" flex items-center  gap-2 px-6 py-4 font-light text-gray-200 whitespace-nowrap dark:text-white"
                  >
                    <img
                      src={item.profile}
                      alt="img"
                      className="w-8 h-8 rounded-full"
                    />
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.age}</td>
                  <td className="px-6 py-4">{item.latest}</td>
                  <td className=" py-2">
                    <button className=" rounded-md px-2 py-1 border-2 border-green-600 hover:border-green-500 mr-1">Detail</button>
                    <button className=" rounded-md px-2 py-1 border-2 border-red-600 hover:border-red-500 mt-1">Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    
  );
};

export default VipCustomer;
