import React from "react";
import '../Css/Cssapp/Nosotros.css';
import Logo from '../Img/Logos/logonoah.png';

function Nosotros() {
  return (
    <div className="container nosotros-jumbotron">
      <hr></hr>
      <div className="jumbotron bg-secondary text-black">
      
        <h1 className="display-4 text-black"><b>Noah Technology</b></h1>
        <hr className="my-4"></hr>
        
        <p className="lead text-black text-nosotros-somos">
        Somos una empresa de tecnología en la cual puedes encontrar servicios como reparación de computadoras, formateo, mantenimiento, instalación de cámaras, creación de paginas Web, implementación de red y cableado entre otros servicios técnicos. Venta de hardware para su computadora o laptop.
        </p>
        <hr/>
        <p>
        Somos una tienda virtual y física, para contratar nuestros servicios puede comunicarse al WhatsApp 8726-1983 y con gusto les atenderemos.
        </p>
        <img src={Logo} className="icons-general-nosotros"></img>
        {/* <img src={Logo} className="icons-general-rotate-nosotros"></img>
        <img src={Logo} className="icons-general-rotate-nosotros"></img> */}
      </div>
      <hr></hr>
    </div>
  );
}

export default Nosotros;
