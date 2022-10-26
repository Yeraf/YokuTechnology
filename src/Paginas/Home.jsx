import React from "react";
import "../Css/Cssapp/Home.css";
import Reparacion from "../Img/Cards/img-reparacion-2.png";
import Hardware from "../Img/Cards/img-hardware-2.jpg";
import Camaras from "../Img/Cards/img-camaras-1.jpg";
import PaginasWeb from "../Img/Cards/img-paginas-web-2.jpg";
import Red from "../Img/Cards/Cables-de-red1.jpg";
import Disponible from "../Img/Cards/Cables-de-red1.jpg";

function Home() {
  return (
    <>
      <div className="div-home-complete">
        <div className="home-img-container">
          <article className="container article-home-intro">
            <h3 className="home-title-h3">Yoku Technology le ofrece</h3>
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
      <main className="container home-main-complete">
        <div class="card-deck">
          <div class="card">
            <img
              className="img-cards-home card-img-top"
              src={Reparacion}
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Reparación de computadoras</h5>
              <p class="card-text">
                Realizamos trabajos de mantenimiento y limpieza de equipos,
                revisión del hardware y software por daños internos entre otros.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Imágenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              className="img-cards-home card-img-top"
              src={Hardware}
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Venta de hardware</h5>
              <p class="card-text">
                Venta de articulos para PC o laptop: monitores, teclados, mouse,
                discos duros, CPU, audífonos entre otros.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Imágenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              className="img-cards-home card-img-top"
              src={Camaras}
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Cámaras</h5>
              <p class="card-text">
                Instalación e implementación de cámaras de video con circuito
                cerrado.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Imágenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
        </div>
      </main>
      <main className="container home-main-complete">
        <div class="card-deck">
          <div class="card">
            <img
              className="img-cards-home card-img-top"
              src={PaginasWeb}
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Páginas Web</h5>
              <p class="card-text">
                Desarrollo de páginas Web para tu negocio, creación de páginas
                personalizadas.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Imágenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              className="img-cards-home card-img-top"
              src={Red}
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Estructurado de red.</h5>
              <p class="card-text">Organización y estructurado de red.</p>
              <p class="card-text">
                <small class="text-muted">
                  Imágenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              className="img-cards-home card-img-top"
              src={PaginasWeb}
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Disponible</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Imágenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
        </div>
      </main>
      <article className="container article-home-video">
        <div className="container">
          <iframe className="div-video-home container"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mB-QXgtoItA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="container div-home-text">
          <h1>Video de reparación</h1>
          <h4>Reparación de equipos</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quisquam natus sunt minus vitae sed autem aliquid corporis minima
            eum laudantium in officia esse assumenda ad iure, sequi
            necessitatibus accusamus!
          </p>
        </div>
      </article>
    </>
  );
}

export default Home;
