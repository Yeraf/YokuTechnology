import { BrowserRouter, Routes, Route } from "react-router-dom";
import Laptops from "../CompProducts/Laptops.jsx";

function RoutesProducts() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/Laptops" element={<Laptops />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesProducts;
