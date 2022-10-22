import React from "react";
import "../Css/Cssapp/Navbar.css";
import Logo from "../Img/Logos/llama.png";
import Facebook from "../Img/Icons/facebook.png";
import Instagram from "../Img/Icons/instagram.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link to="/">
            <img className="Navbar-logo" src={Logo}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                 <b>Home</b> 
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/products">
                  <b>Products</b>
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/about">
                  <b>About</b>
                </Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <a className="mr-sm-2 navbar-a"><img className="Navbar-logo-red" src={Facebook}></img> Instagram</a>
              <a className="mr-sm-2 navbar-a"><img className="Navbar-logo-red" src={Instagram}></img> Facebook</a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
