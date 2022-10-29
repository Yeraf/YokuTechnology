import React from "react";
import "../Css/Cssapp/Contacto.css";

function Contacto() {

  return (
    <div className="container mx-auto form-contacto-complete">
      <form className="form-contacto" id="form">
        <h2 className="h2-contacto">Contacto</h2>
        <input
          className="input-contacto"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre" required
        ></input>
        <input
          className="input-contacto"
          type="text"
          name="email"
          id="email"
          placeholder="Correo" required
        ></input>
        <input
          className="input-contacto"
          type="number"
          name="phone"
          id="phone"
          placeholder="Teléfono" required
        ></input>
        <textarea
          className="input-contacto textarea"
          type="text"
          name="message"
          id="message"
          placeholder="Mensaje"
        ></textarea>
        <input className="btn btn-info input-contacto-buttom" type="submit" id="button" value="ENVIAR MENSAJE" ></input>
      </form>  
    </div>
  );
}

export default Contacto;


