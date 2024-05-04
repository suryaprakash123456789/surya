import React from "react";
import "./Home1.css";
function Intro() {
  return (
    <div className="row intro">
      <div class=" col-lg-6 col-md-6 col-sm-12 col-12 intro1 ">
        <h1 className="intro2">Surya Prakash</h1>
       
          <p>
            My passion lies in building end-to-end products that seamlessly
            integrate social and technical elements, paving the way for
            sustainable solutions that leave a lasting mark on both communities
            and industries.
          </p>
          <span></span>
       
        <div className="row d-flex gap-3 ">
          <div className=" col-md-1 col-sm-2 col-3">
            <img
              src="icons8-linkedin-48 (1).png"
              width="45px"
              alt=""
              style={{
                boxShadow: "2px 2px 2px 2px purple",
                borderRadius: "5px",
              }}
            />
          </div>

          <div className=" col-md-1 col-sm-2 col-3">
            <img
              src="icons8-github-64.png"
              width="45px"
              alt=""
              style={{
                boxShadow: "2px 2px 2px 2px purple",
                borderRadius: "5px",
              }}
            />
          </div>

          <div className="col-md-1 col-sm-2 col-3 ">
            <img
              src="icons8-insta-48.png"
              width="45px"
              alt=""
              style={{
                boxShadow: "2px 2px 2px 2px purple",
                borderRadius: "5px",
              }}
            />
          </div>

          <div className="col-md-1 col-sm-2 col-3 ">
            <img
              src="icons8-google-48.png"
              width="45px"
              alt=""
              style={{
                boxShadow: "2px 2px 2px 2px purple",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="col-md-1 col-sm-2 col-3 ">
            <img
              src="icons8-fb-48.png"
              width="45px"
              alt=""
              style={{
                boxShadow: "2px 2px 2px 2px purple",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <button
          className="mx-lg-0  "
          style={{
            backgroundColor:"darkolivegreen",
            margin: "20px 20px",
            borderRadius: "10px",
            color: "white",
            fontSize: "25px",
            fontWeight:"bold",
            border:0
          }}
        >
          Star me on GitHub <img src="icons8-github-64.png" alt="" width="40px" />
        </button>
      </div>

      <div className=" col-md-5 col-12 col-sm-12 d-flex justify-content-center al intro3">
        <img src="intro1.png" alt="" width="430px" height="400px" />
      </div>
    </div>
  );
}

export default Intro;
