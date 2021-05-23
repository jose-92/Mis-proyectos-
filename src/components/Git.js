import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Git = () => {
  return (
    <BrowserRouter>
      <Link className="nav-link" to="/">
        GitHub
      </Link>
    </BrowserRouter>
  );
};

export default Git;
