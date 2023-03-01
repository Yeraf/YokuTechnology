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
import Audifono from "../Img/Products/audifono-maxell.jpg";
import DiscoDuro from "../Img/Products/disco-estado-solido.jpg";
import ComboMouseTeclado from "../Img/Products/combo-mouse-teclado.png";
import SillaGaming from "../Img/Products/silla-gaming.png";
import CamaraWeb from "../Img/Products/webcam.jpg";
import Cable from "../Img/Products/cable-tipo-c.png";
import Cargador from "../Img/Products/maxell-cargador.png";
import Mochila from "../Img/Products/mochila.jpg";
import Parlante from "../Img/Products/parlante.jpg";
import UPS from "../Img/Products/ups.jpg";

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
              Maxell audífono sms-10 Solid 2 metalizado Mid Size Ruby Rojo.
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
          <img src={DiscoDuro} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Disco duro Kingston</h5>
            <p class="card-text">
              Disco duro Kingston disco de estado solido SA400S37/480G.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={ComboMouseTeclado} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Combo Teclado Mouse</h5>
            <p class="card-text">
              Combo Maxell teclado combo con mouse alambrico wrkbc-10 347111.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={SillaGaming} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Silla Gaming</h5>
            <p class="card-text">
              Silla Gaming Trust silla gaming gxt 708r resto rojo.
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
          <img src={CamaraWeb} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Cámara Web</h5>
            <p class="card-text">
              Camara Web trust camara web video hd 720 p trino usb negro.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={Cable} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Cable tipo C</h5>
            <p class="card-text">
              Cable Maxell cable usb/tipo c de 1.8m trenzado negro.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={Cargador} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Cargador Maxell</h5>
            <p class="card-text">
              Cargador Maxell cargador dusb-c3 usb car charger 3 port type c
              charge 3.4a/3a.
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
          <img src={Mochila} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Mochila Targus</h5>
            <p class="card-text">Mochila Targus 15.6 intellect advanced Bp.</p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={Parlante} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Parlante Maxell</h5>
            <p class="card-text">
            Parlante Maxell ss-120 usb micro Parlante Estereo Negro.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={UPS} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Batería APC</h5>
            <p class="card-text">
            Batería APC ups 425va negra 6 entradas. 120v lam be425M-lm.
            </p>
            <p class="card-text">
              <small class="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Productos;
