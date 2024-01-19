import React from "react";
import Layer1 from "./Layer1";
import Graphic from "./Graphic";

const Home = () => {
  return (
    <div className=" bg-gray-900 absolute right-0 px-7  xl:px-10 mt-20  w-full">
      <div className=" xl:flex ">
        <div className=" lg:mr-4  mb-5 xl:mb-0    ">
          <Layer1 />
        </div>
        <Graphic />
      </div>
    </div>
  );
};

export default Home;
