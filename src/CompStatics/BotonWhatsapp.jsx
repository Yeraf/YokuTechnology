import React from "react";
import '../Css/Cssapp/BotonWhatsapp.css';
import WhatsApp from '../Img/Icons/whatsapp.png';

function BotonWhatsapp() {
  return (
    <div>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=87261983"
          className="btn-wsp"
          target="_blank"
        >
          <i className="icon-whatsapp">
            <img className="icon-whatsapp-img" src={WhatsApp}></img>
          </i>
        </a>
      </div>
    </div>
  );
}

export default BotonWhatsapp;
