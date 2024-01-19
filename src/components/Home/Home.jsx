import React from "react";
import Layer1 from "./Layer1";
import Graphic from "./Graphic";

const Home = () => {
  return (
    <div className="  absolute right-0 px-10  overflow-hidden mt-20 bg-purple-400 w-full">
      <div className="  flex ">
        <div className=" mr-4 w-1/2 bg-yellow-200">
          <Layer1 />
        </div>
        <Graphic />
      </div>
    </div>
  );
};

export default Home;
