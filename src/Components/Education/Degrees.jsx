import React from "react";
// import Degree1 from "../pages/Degree1";
// import Degree2 from "../pages/Degree2";
import { NavLink } from "react-router-dom";

import './Education1.css'
function Degrees() {
  return (
      <div>
        <div className="row m-5">
        
          <div className="col-lg-6">
            <img src="Graduation.jpg-removebg-preview.png" alt="" width={450}/>
          </div>
          <div className="col-lg-6 ">
          <h1 className="Degree1">Education</h1>
          <h2 className="Degree2">Basic Qualification and Certifications</h2><br/><br/>
          <div className=" row d-flex gap-4 ">
          
            <div className="col-md-2 col-sm-3 col-3"><img src="stackoverflow1-removebg-preview.png" alt="" width="90px"/></div>
            <div className="col-md-2 col-sm-3 col-3"><img src="leetcode1-removebg-preview.png" alt="" width="80px" height={80}/></div>
            <div className="col-md-2 col-sm-3 col-3"><img src="codechef-removebg-preview.png" alt="" width="100px" height={100}/></div>
            <div className="col-md-2 col-sm-3 col-3"><img src="hackererath-removebg-preview.png" alt="" width="60px" height="75px"/></div>
          </div>
          </div>
        </div>
        <div className="row m-5">
          <h1 className="Degree3">Degrees Recevied</h1>
          <div className="col-lg-3  Degree4 m-5 card">
           <img src="cmritlogo-2.png" alt="" width="200px" height={150} className="rounded-3"/>
            </div>
            <div className="col-lg-1   ">

            </div>
            <div className="col-lg-6 Degree5 card  justify-content-center rounded-4 m-5   ">
            <row className="Degree12 p-3">
              <h2 className=" fs-7 Degree6">Certificate of Completion</h2>
              <h4>Bachelor of Engineering(B.E)</h4>
              <h6 className="Degree7 ">
               CMR Institute of technology,Bangalore
              </h6>
            </row><br/>
             <row className=" text-light rounded-3 text-center p-2  " >
             <NavLink to="/Education/Degrees/DegreesMain">
           <button className="Degree8  bg-warning rounded-5 ">Degrees Recevied</button>
            </NavLink>
             </row>
            
            </div>
  
        </div>
      </div>
  );
}

export default Degrees;
