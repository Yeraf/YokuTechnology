import React, { Component } from "react";
import "../Css/Cssapp/Servicios.css";
import Reparacion from "../Img/Cards/img-reparacion-1.jpg";
import Camaras from "../Img/Servicios/camaras-servicios3.jpg";
import Perifericos from "../Img/Servicios/perifericos.jpg";
import Redes from "../Img/Servicios/expertos-redes.jpeg";
import Sistemas from "../Img/Servicios/expertos-sistemas.jpeg";
import Tecnología from "../Img/Servicios/expertos-tecnologia.jpeg";

export class Servicios extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={Redes} class="card-img" alt={Redes}></img>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Sistemas} class="card-img" alt={Sistemas}></img>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Tecnología} class="card-img" alt={Tecnología}></img>
            </div>
          </div>
        </div>
        <hr />
        <div class="card-columns">
          <div class="card">
            <img src={Reparacion} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">¿Se te dañó la compu?</h5>
              <p class="card-text">
                Noah Technology te ayuda a resolver, nuestros profecionales
                trabajaran para solucionar el problema.
              </p>
            </div>
          </div>
          <div class="card bg-info text-white text-center p-3">
            <blockquote class="blockquote mb-0">
              <p>Creamos tu página Web para aumentar tus ventas.</p>
              <footer class="blockquote-footer text-white">
                <small>
                  háblanos de tu proyecto. <cite title="Source Title"></cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div class="card bg-primary text-white text-center p-3">
            <blockquote class="blockquote mb-0">
              <p>
                Somos una empresa seria que trabaja de la forma más profesional
                para garantizar los mejores resultados.
              </p>
              <footer class="blockquote-footer text-white">
                <small>
                  Noah <cite title="Source Title">Technology.</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Noah Technology</h5>
              <p class="card-text">
                Tecnología a su alcance y con precios accesibles..
              </p>
              <p class="card-text">
                <small class="text-muted">con dedicación y esfuerzo</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src={Perifericos} class="card-img" alt="..."></img>
          </div>
          <div class="card bg-warning text-white text-center p-3">
            <blockquote class="blockquote mb-0">
              <p>Tenemos gran variedad de hardware para tu PC o Laptop.</p>
              <footer class="blockquote-footer text-white">
                <small>
                  Consulte por{" "}
                  <cite title="Source Title">nuestros productos.</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div class="card">
            <img src={Camaras} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">¿Ocupas video seguridad?</h5>
              <p class="card-text">
                Nuestro equipo le soluciona, instalamos cámaras de seguridad en
                circuito cerrado, grabación 24/7 tiempo real que puedes ver
                desde su teléfono celular.
              </p>
              {/* <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
          <div class="card bg-info text-white text-center p-3">
            <blockquote class="blockquote mb-0">
              <p>Servicio de mantenimiento de computadoras.</p>
              <footer class="blockquote-footer text-white">
                <small>
                  Aumenta el tiempo de vida{" "}
                  <cite title="Source Title">de tu computadora.</cite>
                </small>
              </footer>
            </blockquote>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Servicios;
