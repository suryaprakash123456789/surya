import React from "react";
import node from "../node.png";
import python from "../Home/icons8-python-48.png";
import logo from "../../../src/code icon.png";

function About() {
  return (
    <div className="row ">
      <h1 className="About1">What I Do</h1>
      <div className="col-lg-5 m-5  ">
    <img src="aboutme-21.png" alt=""  width={400} className="aboutme"  />
      </div>
      <div className="col-lg-5 m-5  ">
        <h1 className="About2">Full Stack developer</h1>
        <div className="row d-flex gap-3 ">
          <div className="col-md-2 col-sm-3 col-2  ">
            <img src="logo192.png" alt="" width="50px" />
          </div>
          <div className="col-md-2 col-sm-3 col-2">
            <img src="icons8-html-48.png" alt="" width="50px" />
          </div>
          <div className="col-md-2 col-sm-3 col-2 ">
            <img src="icons8-css-48.png" alt="" width="50px" />
          </div>
          <div className="col-md-2 col-sm-3 col-2">
            <img src="icons8-javascript-48.png" alt="" width="50px"/>
          </div>
          <div className="col-md-2 col-sm-3 col-2">
            <img src="icons8-bootstrap-48.png" alt="" width="50px"/>
          </div>
          <div className="col-md-2 col-sm-3 col-2 ">
            <img src={node} alt="" width="50px" />
          </div>
          <div className="col-md-2 col-sm-3 col-2 ">
            <img src={python}  alt="" width="50px" />
          </div>
        </div>
        <br />
        <img src={logo} alt="" width="25px"  />
        <span className="About3">
          As a React developer, I specialize in crafting dynamic and interactive
          user interfaces. With a focus on efficiency and scalability, I bring
          ideas to life, leveraging React's powerful components and state
          management to create seamless web experiences.
        </span>
        <br />
        <br />
        <img src={logo} alt="" width="25px" className="About3"/><span  className="About3">
           Building an responsive frontend
          Website with a beautifull features using the react library and the react
          framework.
        </span>
      </div>
    </div>
  );
}

export default About;
