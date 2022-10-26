import React from "react";
import "../Css/Cssapp/Contacto.css";

function Contacto() {
  return (
    <div className="container mx-auto form-contacto-complete">
      <form className="form-contacto">
        <h2 className="h2-contacto">Contacto</h2>
        <input className="input-contacto" type="text" name="Nombre" placeholder="Nombre"></input>
        <input className="input-contacto" type="text" name="Correo" placeholder="Correo"></input>
        <input className="input-contacto" type="text" name="Telefono" placeholder="Teléfono"></input>
        <textarea className="input-contacto textarea" name="" placeholder="Mensaje"></textarea>
        <input
          className="btn btn-info input-contacto-buttom"
          type="buttom"
          value="ENVIAR"
          id="boton"
        ></input>
      </form>
    </div>
  );
}

export default Contacto;
