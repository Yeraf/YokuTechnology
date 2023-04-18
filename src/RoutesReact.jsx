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
import TABLETS from "./CompProducts/tablets";
import MEMORIAS from "./CompProducts/memorias";
import CABLES from "./CompProducts/cables";
import VENTILADORES from "./CompProducts/ventiladores";
import MONITORES from "./CompProducts/monitores";
import BATERIAS from "./CompProducts/baterias";
import IMPRESORAS from "./CompProducts/impresoras";
import FUNDAS from "./CompProducts/impresoras";
import SILLAS from "./CompProducts/impresoras";
import ESCRITORIOS from "./CompProducts/impresoras";
import HERRAMIENTAS from "./CompProducts/herramientas";

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
          <Route exact path="/tablets" element={<TABLETS />}></Route>
          <Route exact path="/memorias" element={<MEMORIAS />}></Route>
          <Route exact path="/cables" element={<CABLES />}></Route>
          <Route exact path="/ventiladores" element={<VENTILADORES />}></Route>
          <Route exact path="/monitores" element={<MONITORES />}></Route>
          <Route exact path="/baterias" element={<BATERIAS />}></Route>
          <Route exact path="/impresoras" element={<IMPRESORAS />}></Route>
          <Route exact path="/fundas" element={<FUNDAS />}></Route>
          <Route exact path="/sillas" element={<SILLAS />}></Route>
          <Route exact path="/escritorios" element={<ESCRITORIOS />}></Route>
          <Route exact path="/herramientas" element={<HERRAMIENTAS />}></Route>

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
