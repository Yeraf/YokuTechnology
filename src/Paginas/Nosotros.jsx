import React from "react";
import '../Css/Cssapp/Nosotros.css';
import Logo from '../Img/Logos/llama3.png';

function Nosotros() {
  return (
    <div className="container nosotros-jumbotron">
      <hr></hr>
      <div className="jumbotron bg-warning text-black">
        <h1 class="display-4 text-black"><b>Noah Technology</b></h1>
        <p className="lead text-black">
        Somos una empresa de tecnología en la cual puedes encontrar servicios como reparación de computadoras, formateo, mantenimiento, instalación de cámaras, creación de paginas Web, implementación de red y cableado entre otros servicios técnicos.
        </p>
        <img src={Logo} className="icons-general-nosotros"></img>
        <img src={Logo} className="icons-general-rotate-nosotros"></img>
        <img src={Logo} className="icons-general-rotate-nosotros"></img>
        <hr class="my-4"></hr>
        <p>
        Somos una tienda virtual y física, para contratar nuestros servicios puede comunicarse al WhatsApp 8726-1983 y con gusto les atenderemos.
        </p>
      </div>
      <hr></hr>
    </div>
  );
}

export default Nosotros;
