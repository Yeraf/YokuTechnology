import React from "react";
import '../Css/Cssapp/Home.css';
import Logo from '../Img/Logos/llama2.png';

function Home() {
  return (
    <div className="div-home-complete">
    <div className="container div-home-title">
      <img className="home-logo-img" src={Logo}></img>Yoku Technology
      <img className="home-logo-img-rotate" src={Logo}></img>
    </div>
    </div>
  );
}

export default Home;
