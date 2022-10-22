import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./CompStatics/Navbar";
import Home from "./Paginas/Home";
import Products from "./Paginas/Productos";
import Servicices from './Paginas/Servicios';
import About from './Paginas/Nosotros';
import Contact from './Paginas/Contacto';

function RoutesReact() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact index path='/' element={<Home />}></Route>
        <Route exact index path='/YokuTechnology/' element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/services" element={<Servicices />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesReact;
