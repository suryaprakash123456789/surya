import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./Components/pages/Home";

import Home from "./Components/pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Education from "./Components/pages/Education";
import Projects from "./Components/pages/Projects";
import Degree1 from "./Components/pages/Degree1";
import Degree2 from "./Components/pages/Degree2";
import Experience from "./Components/pages/Experience";
import Contact from "./Components/pages/Contact";
import DegreesMain from "./Components/pages/DegreesMain";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Education/Degrees/DegreesMain" element={<DegreesMain />} />
        <Route path="/Education/Degrees/DegreesMain/Degree1" element={<Degree1 />} />
        <Route path="/Education/Degrees/DegreesMain/Degree2" element={<Degree2 />} />
      </Routes>
    </div>
  );
}

export default App;
