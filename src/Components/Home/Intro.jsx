import React from "react";
import "./Home1.css";
function Intro() {
  return (
    <div className="row intro">
      <div class=" col-lg-6 col-md-6 col-sm-12  intro1 ">
        <h1 className="intro2">Surya Prakash</h1>

        <p className="intro21"> 
          My passion lies in building end-to-end products that seamlessly
          integrate social and technical elements, paving the way for
          sustainable solutions that leave a lasting mark on both communities
          and industries.
        </p>

        <div className="row d-flex gap-3 into22">
          <div className=" col-md-1 col-sm-2 col-3">
            <a
              href="https://www.linkedin.com/in/v-surya-prakash-a6953421b/"
              target="_blank"
            >
              <img
                src="icons8-linkedin-48 (1).png"
                width="45px"
                alt=""
                style={{
                  boxShadow: "2px 2px 2px 2px purple",
                  borderRadius: "5px",
                }}
              />
            </a>
          </div>

          <div className=" col-md-1 col-sm-2 col-3">
            <a href="https://github.com/suryaprakash123456789" target="_blank">
              <img
                src="icons8-github-64.png"
                width="45px"
                alt=""
                style={{
                  boxShadow: "2px 2px 2px 2px purple",
                  borderRadius: "5px",
                }}
              />
            </a>
          </div>

          <div className="col-md-1 col-sm-2 col-3 ">
            <a
              href="https://www.instagram.com/vsuryap/?next=%2F"
              target="_blank"
            >
              <img
                src="icons8-insta-48.png"
                width="45px"
                alt=""
                style={{
                  boxShadow: "2px 2px 2px 2px purple",
                  borderRadius: "5px",
                }}
              />
            </a>
          </div>

          <div className="col-md-1 col-sm-2 col-3 ">
            <a
              href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act"
              target="_blank"
            >
              <img
                src="icons8-google-48.png"
                width="45px"
                alt=""
                style={{
                  boxShadow: "2px 2px 2px 2px purple",
                  borderRadius: "5px",
                }}
              />
            </a>
          </div>
          <div className="col-md-1 col-sm-2 col-3 ">
            <a
              href="https://www.facebook.com/profile.php?id=100046416469121"
              target="_blank"
            >
              <img
                src="icons8-fb-48.png"
                width="45px"
                alt=""
                style={{
                  boxShadow: "2px 2px 2px 2px purple",
                  borderRadius: "5px",
                }}
              />
            </a>
          </div>
        </div>
        <a
          href="https://github.com/suryaprakash123456789?tab=stars"
          target="_blank"
        >
          <button
            className=" intro23  "
            style={{
              backgroundColor: "darkolivegreen",
              margin: "20px 20px",
              borderRadius: "10px",
              color: "white",
              fontSize: "25px",
              fontWeight: "bold",
              border: 0,
            }}
          >
            Star me on GitHub{" "}
            <img src="icons8-github-64.png" alt="" width="40px" />
          </button>
        </a>
      </div>

      <div className=" col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center   intro3">
        <img src="intro1.png" alt="" width="390px"  />
      </div>
    </div>
  );
}

export default Intro;
