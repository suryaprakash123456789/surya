import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import "./Nav1.css"
function Navbar() {
  return (
    <div
      className="row d-flex justify-content-around align-items-center    p-4  Nav1"
  
    >
      <NavLink to="/Home" className="hom col-12 col-sm-12 col-lg-2"
       >
        <span>Home</span>
        
      </NavLink>

      <NavLink 
        to="/Education" className="hom col-12 col-sm-12 col-lg-2"
     
      > 
        Education
      </NavLink>

      <NavLink to="/Experience" className="hom col-12 col-sm-12 col-lg-2">
        Experience
      </NavLink>

      <NavLink to="/Projects" className="hom col-12 col-sm-12 col-lg-2" >
        Projects
      </NavLink>

      <NavLink to="/Contact" className="hom col-12 col-sm-2 col-lg-2">
        Contact
      </NavLink>
    </div>
  );
}

export default Navbar;

