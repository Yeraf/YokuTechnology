import "../Css/Cssapp/Navbar.css";
import Logo from "../Img/Logos/logo-website.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container-main ">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top color-navbar">
        <div className="container navbar-links-container">
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
            <ul className="navbar-nav  mx-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  <b className="navbar-links-b">INICIO</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/products">
                  <b className="navbar-links-b">PRODUCTOS</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/services">
                  <b className="navbar-links-b">SERVICIOS</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/about">
                  <b className="navbar-links-b">NOSOTROS</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/contact">
                  <b className="navbar-links-b">CONTACTO</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
