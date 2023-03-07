import React from "react";
import "../Css/Cssapp/Contacto.css";
import emailjs from "@emailjs/browser";

function Contacto() {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_3cg1f6p",
        "template_l5hples",
        event.target,
        "FoFts6LOyy45_0Jmz"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    alert("Correo enviado con éxito");
  };

  return (
    <div className="contact-div-complete">
    <div className="container mx-auto form-contacto-complete">
      <form className="form-contacto" id="form" onSubmit={sendEmail}>
        <h2 className="h2-contacto">Contacto</h2>
        <input
          className="input-contacto"
          type="text"
          name="user_name"
          id="name"
          placeholder="Nombre"
          required
        ></input>
        <input
          className="input-contacto"
          type="text"
          name="user_email"
          id="email"
          placeholder="Correo"
          required
        ></input>
        <input
          className="input-contacto"
          type="number"
          name="user_phone"
          id="phone"
          placeholder="Teléfono"
          required
        ></input>
        <textarea
          className="input-contacto textarea"
          type="text"
          name="user_message"
          id="message"
          placeholder="Mensaje"
        ></textarea>
        <input
          className="btn btn-info input-contacto-buttom"
          type="submit"
          id="button"
          value="ENVIAR MENSAJE"
        ></input>
      </form>
    </div>
    </div>
  );
}

export default Contacto;
