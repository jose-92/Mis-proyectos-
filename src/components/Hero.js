import React from "react";
import jose from "./img/jose.png";
import "./styles/hero.css";

const Hero = () => {
  return (
    <div className="container__hero">
      <div>
        <h1 className="title">
          Front End <br />
          Developer
        </h1>
        <h3>
          Jose Martinez 
          fuentes
        </h3>
        <p className="hero__p">
          Brindo soluciones para las personas que quieran crear una pagina web{" "}
          <br /> utilizando tecnologias como HTML-CSS.JAVASCRIPT{" "}
        </p>
        <a href="http://"> portafolio</a>
      </div>
      <div>
        <div className="hero__img">
          <img src={jose} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
