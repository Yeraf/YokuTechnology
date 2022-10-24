import React from "react";
import "../Css/Cssapp/Home.css";
import Reparacion from '../Img/Cards/img-reparacion-2.png';
import Hardware from '../Img/Cards/img-hardware-1.jpg';
import Camaras from '../Img/Cards/img-camaras-1.jpg';
import PaginasWeb from '../Img/Cards/img-paginas-web-2.jpg';

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
            <img className="img-cards-home" src={Reparacion} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
          <img className="img-cards-home" src={Hardware} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
          <img className="img-cards-home" src={Camaras} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </main>
      <main className="container home-main-complete">
        <div class="card-deck">
          <div class="card">
            <img className="img-cards-home" src={PaginasWeb} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
          <img className="img-cards-home" src={PaginasWeb} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
          <img className="img-cards-home" src={PaginasWeb} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
