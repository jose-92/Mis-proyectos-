import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Body from "./body"

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Body/>
    </div>
  );
};

export default App;
