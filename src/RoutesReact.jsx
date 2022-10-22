import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./CompStatics/Navbar";

function RoutesReact() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesReact;
