import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SideBar from "./SideBar";
import Menu from "./components/Menu/Menu";
import VipCustomer from "./components/VipCustomer";
import PieChart from "./Charts/PieChart";
import ColumChartApex from "./Charts/ColumChartApex";

function App() {
  return (
    <BrowserRouter>
      <div className=" flex bg-gray-900 w-full   ">
        <div className=" fixed z-50 ">
          <SideBar />
        </div>
        <div className=" w-full right-0 px-7   xl:px-10  mt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/vip" element={<VipCustomer/>} />
            <Route path="/piechart" element={<PieChart/>} />
            <Route path="/columnchart" element={<ColumChartApex/>} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
