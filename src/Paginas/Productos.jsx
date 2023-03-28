import React from "react";
import "../Css/Cssapp/Productos.css";
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
        <div className="card-group">
          <div className="card">
            <img src={DellPromo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title productos-h1">
                <img className="productos-emogis" src={Lentes}></img>Promo PC
                <img className="productos-emogis" src={Lentes}></img>
              </h5>
              <p className="card-text">Pregunte por nuestras promos de Pc (CPU)</p>
              <p className="card-text">
                <small className="text-muted">Productos no incluyen envío</small>
              </p>
              <p>
                <small className="text-muted">
                Imágenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kit} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title productos-h1">
                <img className="productos-emogis" src={Wow}></img>Promo Kit
                <img className="productos-emogis" src={Wow}></img>
              </h5>
              <p className="card-text">
                Tenemos promos de PC , teclado , mouse y monitor a buen precio.
              </p>
              <p className="card-text">
                <small className="text-muted">Productos no incluyen envío</small>
              </p>
              <p>
                <small className="text-muted">
                Imágenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Promo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title productos-h1">
                <img className="productos-emogis" src={Side}></img>Promo
                Mantenimiento<img className="productos-emogis" src={Side}></img>
              </h5>
              <p className="card-text">
                Promoción para mantenimientos de equipos, consulte por los
                paquetes.
              </p>
              <p>
                <small className="text-muted">
                Imágenes con fines ilustrativos
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="card-deck">
        <div className="card">
          <img src={Audifono} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Audífono Maxell</h5>
            <p className="card-text">
              Maxell audífono sms-10 Solid 2 metalizado Mid Size Ruby Rojo.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Mouse} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Mouse Maxell</h5>
            <p className="card-text">
              Maxell mouse mowr-105 optical mouse five button silver.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Teclado} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Teclado Targus</h5>
            <p className="card-text">Targus teclado alambrico AKB644ESLA.</p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="card-deck">
        <div className="card">
          <img src={DiscoDuro} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Disco duro Kingston</h5>
            <p className="card-text">
              Disco duro Kingston disco de estado solido SA400S37/480G.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={ComboMouseTeclado} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Combo Teclado Mouse</h5>
            <p className="card-text">
              Combo Maxell teclado combo con mouse alambrico wrkbc-10 347111.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={SillaGaming} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Silla Gaming</h5>
            <p className="card-text">
              Silla Gaming Trust silla gaming gxt 708r resto rojo.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="card-deck">
        <div className="card">
          <img src={CamaraWeb} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Cámara Web</h5>
            <p className="card-text">
              Camara Web trust camara web video hd 720 p trino usb negro.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Cable} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Cable tipo C</h5>
            <p className="card-text">
              Cable Maxell cable usb/tipo c de 1.8m trenzado negro.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Cargador} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Cargador Maxell</h5>
            <p className="card-text">
              Cargador Maxell cargador dusb-c3 usb car charger 3 port type c
              charge 3.4a/3a.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="card-deck">
        <div className="card">
          <img src={Mochila} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Mochila Targus</h5>
            <p className="card-text">Mochila Targus 15.6 intellect advanced Bp.</p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Parlante} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Parlante Maxell</h5>
            <p className="card-text">
            Parlante Maxell ss-120 usb micro Parlante Estereo Negro.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={UPS} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Batería APC</h5>
            <p className="card-text">
            Batería APC ups 425va negra 6 entradas. 120v lam be425M-lm.
            </p>
            <p className="card-text">
              <small className="text-muted">Precio de venta ...</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Productos;
