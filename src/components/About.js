import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const About = () => {
  return (
    <BrowserRouter>
      <div className="nav">
        <Link className="nav-link" to="/">
          Sobre mi
        </Link>
      </div>
    </BrowserRouter>
  );
};

export default About;
