import React from "react";
import "./styles/header.css";
import Home from "./Home";
import About from "./About";
import Git from "./Git";
import Link from "./link";
const Header = () => {
  return (
    <div>
      <div className="navbar navbar-dark bg-dark">
        <div className="container__img">
          <figure className="navbar__img ">
            <img
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg"
              alt="foto"
            />
          </figure>
          <h2>
            Jose Enrique <br /> Martinez Fuentes
          </h2>
        </div>
        <ol className="navbar__listas ">
          <li className="">
            <About />
          </li>
          <li className="">
            <Home />
          </li>
          <li className="">
            <Git />
          </li>
          <li className="">
            <Link />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Header;
