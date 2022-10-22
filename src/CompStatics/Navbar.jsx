import React from "react";
import "../Css/Cssapp/Navbar.css";
import Logo from "../Img/Logos/llama.png";
import Facebook from "../Img/Icons/facebook.png";
import Instagram from "../Img/Icons/instagram.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container-main">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link to="/">
            <img className="Navbar-logo" src={Logo}></img>
          </Link>
          <hr></hr>
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  <b className="navbar-links-b">Home</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/products">
                  <b className="navbar-links-b">Productos</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/services">
                  <b className="navbar-links-b">Servicios</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/about">
                  <b className="navbar-links-b">Nosotros</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/contact">
                  <b className="navbar-links-b">Contacto</b>
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <a
                href="https://www.youtube.com/?hl=es-419"
                className="mr-sm-2 navbar-a"
                target="_blank"
              >
                <img className="Navbar-logo-red" src={Facebook}></img> Instagram
              </a>
              <a
                href="https://www.youtube.com/?hl=es-419"
                className="mr-sm-2 navbar-a"
                target="_blank"
              >
                <img className="Navbar-logo-red" src={Instagram}></img> Facebook
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
