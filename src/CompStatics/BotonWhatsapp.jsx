import React from "react";
import "../Css/Cssapp/BotonWhatsapp.css";
import WhatsApp from "../Img/Icons/whatsapp.png";

function BotonWhatsapp() {
  return (
    <div>
      <div>
        <a
          // href="https://wa.me/87261983"
          //  href="https://api.whatsapp.com/send?phone=+506-87261983"
          href="https://chat.whatsapp.com/LCsk9ztaowR9WMWfd33nA4"
          className="btn-wsp"
          target="_blank"
        >
          <i className="icon-whatsapp">
            <img className="icon-whatsapp-img animate__animated animate__rollIn" src={WhatsApp}></img>
          </i>
        </a>
      </div>
    </div>
  );
}

export default BotonWhatsapp;
