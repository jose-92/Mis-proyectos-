import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <Link className="nav-link" to="/"> Home</Link>
    </BrowserRouter>
  );
};

export default Home;
