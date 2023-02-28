import React from "react";
import "../Css/Cssapp/Productos.css";
import Monitor from "../Img/Products/product-monitor.jpg";
import Mouse from "../Img/Products/mouse-silver.png";
import Teclado from "../Img/Products/teclado-targus.jpg";
import Lentes from "../Img/Emogis/cool.png";
import Wow from "../Img/Emogis/wow.png";
import Side from "../Img/Emogis/coolside.png";
import Promo from "../Img/Products/mantenimiento-de-pc.jpg";
import Kit from "../Img/Products/kit-pc.jpg";
import DellPromo from "../Img/Products/dell-promo.png";
import Audifono from "../Img/Products/audifono-maxell.jpg"

function Productos() {
  return (
    <div className="container">
      <div className="h3-productos-title">
        <h3>Algunos de nuestros productos</h3>
        <h6>consulte por los combos de PC!!</h6>
      </div>
      <hr></hr>
      <div>
        <div class="card-group">
          <div class="card">
            <img src={DellPromo} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 className="card-title productos-h1">
                <img className="productos-emogis" src={Lentes}></img>Promo PC
                <img className="productos-emogis" src={Lentes}></img>
              </h5>
              <p class="card-text">Pregunte por nuestras promos de Pc (CPU)</p>
              <p class="card-text">
                <small class="text-muted">Productos no incluyen envío</small>
              </p>
              <p>
                <small class="text-muted">
                  Imagenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src={Kit} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 className="card-title productos-h1">
                <img className="productos-emogis" src={Wow}></img>Promo Kit
                <img className="productos-emogis" src={Wow}></img>
              </h5>
              <p class="card-text">
                Tenemos promos de PC , teclado , mouse y monitor a buen precio.
              </p>
              <p class="card-text">
                <small class="text-muted">Productos no incluyen envío</small>
              </p>
              <p>
                <small class="text-muted">
                  Imagenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src={Promo} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 className="card-title productos-h1">
                <img className="productos-emogis" src={Side}></img>Promo
                Mantenimiento<img className="productos-emogis" src={Side}></img>
              </h5>
              <p class="card-text">
                Promoción para mantenimientos de equipos, consulte por los
                paquetes.
              </p>
              <p>
                <small class="text-muted">
                  Imagenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div class="card-deck">
        <div class="card">
          <img src={Audifono} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Audífono Maxell</h5>
            <p class="card-text">
              Maxell audífono  sms-10 Solid 2 metalizado Mid Size Ruby Rojo.
            </p>
            <p class="card-text">
            <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={Mouse} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Mouse Maxell</h5>
            <p class="card-text">
              Maxell mouse mowr-105 optical mouse five button silver.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={Teclado} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Teclado Targus</h5>
            <p class="card-text">Targus teclado alambrico AKB644ESLA.</p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="card-deck">
        <div class="card">
          <img src={Monitor} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={Mouse} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={Teclado} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="card-deck">
        <div class="card">
          <img src={Monitor} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={Mouse} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={Teclado} class="card-img-top" alt="..."></img>
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
      <hr />
      <div class="card-deck">
        <div class="card">
          <img src={Monitor} class="card-img-top" alt="..."></img>
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
          <img src={Mouse} class="card-img-top" alt="..."></img>
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
          <img src={Teclado} class="card-img-top" alt="..."></img>
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
      <hr />
      <div class="card-deck">
        <div class="card">
          <img src={Monitor} class="card-img-top" alt="..."></img>
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
          <img src={Mouse} class="card-img-top" alt="..."></img>
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
          <img src={Teclado} class="card-img-top" alt="..."></img>
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
      <hr />
    </div>
  );
}

export default Productos;
