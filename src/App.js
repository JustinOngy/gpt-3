import React from "react";
import {
  Features,
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Header,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div className></div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
