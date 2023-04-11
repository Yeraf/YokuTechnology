import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./CompStatics/Navbar";
import Home from "./Paginas/Home";
import Products from "./Paginas/Productos";
import Servicices from "./Paginas/Servicios";
import About from "./Paginas/Nosotros";
import Contact from "./Paginas/Contacto";
import BotonWhatsapp from "./CompStatics/BotonWhatsapp";
import DropDown from "./CompStatics/DropDown";
import Footer from "./CompStatics/Footer";
import Laptops from "./CompProducts/Laptops";
import Mouse from "./CompProducts/mouse";
import CPU from "./CompProducts/cpu";
import DISCOS from "./CompProducts/discoduro";
import TECLADOS from "./CompProducts/teclados";
import AUDIFONOS from "./CompProducts/audifonos";

function RoutesReact() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <HashRouter>
        <Navbar />
        <DropDown />
        <Routes>
          <Route exact index path="/" element={<Home />}></Route>
          <Route exact index path="/YokuTechnology/" element={<Home />}></Route>
          <Route exact path="/products/*" element={<Products />}></Route>
          <Route exact path="/services" element={<Servicices />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/laptops" element={<Laptops />}></Route>
          <Route exact path="/mouse" element={<Mouse />}></Route>
          <Route exact path="/cpu" element={<CPU />}></Route>
          <Route exact path="/discos" element={<DISCOS />}></Route>
          <Route exact path="/teclados" element={<TECLADOS />}></Route>
          <Route exact path="/audifonos" element={<AUDIFONOS />}></Route>
          
          <Route exact path="/*/*" element={ <Navigate to='/home'/>}></Route>
        </Routes>
        <BotonWhatsapp />
      </HashRouter>
      </div>
      <Footer />
    </div>
  );
}

export default RoutesReact;
