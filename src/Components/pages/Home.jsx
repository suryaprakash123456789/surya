import React from "react";
import Intro from "../Home/Intro";
import Skills from "../Home/Skills";
import About from "../Home/About";
import "./HomePage.css";

function Home() {
  return (
    <div className="home">
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default Home;
