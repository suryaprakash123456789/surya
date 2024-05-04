import React from "react";
import { NavLink } from "react-router-dom";

function Degrees() {
  return (
    <div>
      <NavLink to="/Education/Degrees/Degree1">Degree 1</NavLink><br/>
      <NavLink to="/Education/Degrees/Degree2">Degree 2</NavLink>
    </div>
  );
}

export default Degrees;
