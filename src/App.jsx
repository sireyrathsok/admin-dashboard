import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Analytic from "./components/Analytical/Analytic";
import ECommerce from "./components/eCommerce/ECommerce";
import SideBar from "./SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className=" flex bg-gray-900 w-full  h-screen">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analytic />} />
          <Route path="/ecommerce" element={<ECommerce />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
