import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const link = () => {
  return (
    <BrowserRouter>
      <Link className="nav-link" to="/">
        Linkedin
      </Link>
    </BrowserRouter>
  );
};

export default link;
