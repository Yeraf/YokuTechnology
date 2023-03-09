import React from "react";

import Tienda1 from "../Img/Home/tienda-1.jpg";
import Tienda2 from "../Img/Home/tienda-2.jpg";
import Tienda3 from "../Img/Home/tienda-3.jpg";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 img-carousel"
              src={Tienda1}
              alt="First slide"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h5 className="h5-homme-carousel">Reparación y mantenimiento de computadoras.</h5>
              <p className="h5-homme-carousel">8726-1983</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-carousel"
              src={Tienda2}
              alt="Second slide"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              {/* <h5 className="h5-homme-carousel">Venta de hardware para su PC o laptop.</h5> */}
              <p className="h5-homme-carousel">Instagram techno.noah</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-carousel"
              src={Tienda3}
              alt="Third slide"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              {/* <h5 className="h5-homme-carousel">Instalación de cámaras circuito cerrado.</h5> */}
              {/* <p className="h5-homme-carousel">8726-1983</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-carousel"
              src={Tienda1}
              alt="Third slide"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h5 className="h5-homme-carousel">Creación de páginas Web.</h5>
              <p className="h5-homme-carousel">8726-1983</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-carousel"
              src={Tienda3}
              alt="Third slide"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              {/* <h5 className="h5-homme-carousel">Sistema de facturación PDV </h5> */}
              <a className="link_noah" href="https://noah.cr/login" target={"_blank"}>noah.cr</a>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
