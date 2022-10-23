import React from "react";
import "../Css/Cssapp/Home.css";
import Logo from "../Img/Logos/llama2.png";

function Home() {
  return (
    <div className="div-home-complete">
      <div className="home-img-container">
        <div className="container div-home-title">
          {/* <img className="home-logo-img" src={Logo}></img>Yoku Technology
        <img className="home-logo-img-rotate" src={Logo}></img> */}
        </div>
        <article className="container article-home-intro">
          <h3>Yoku Technology le ofrece</h3>
          <ul>
            <li>Reparación y mantenimiento de computadoras.</li>
            <li>Venta de hardware para su PC o laptop.</li>
            <li>Instalación de cámaras circuito cerrado.</li>
            <li>Creación de páginas Web.</li>
            <li>Entre otros servicios.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Home;
