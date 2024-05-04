import React from 'react'
import  logo from '../../../src/code icon.png'
function Contactme() {
  return (
    <div className='row m-5'>
   <div className='col-lg-6'><img src="Contact.jpg" alt="" width="550px" height="450px"/></div>
   <div className='col-lg-6'>
    <h1 className='contact1'>Contact me</h1>
    <img src={logo} alt="" width="25px"  /><span className='contact2'>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud.</span>
    <div className="col-12 col-md-12 col-lg-6 d-flex gap-4">
          <img
            src="icons8-linkedin-48 (1).png"
            width="45px"
            alt=""
            style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
          />
          <img
            src="icons8-github-64.png"
            width="45px"
            alt=""
            style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
          />
          <img
            src="icons8-insta-48.png"
            width="45px"
            alt=""
            style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
          />
          <img
            src="icons8-google-48.png"
            width="45px"
            alt=""
            style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
          />
             <img
            src="icons8-fb-48.png"
            width="45px"
            alt=""
            style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
          />
        </div>
        <button
          className="mx-lg-0 "
          style={{ backgroundColor: "darkblue", margin: "20px 20px",borderRadius: "5px",boxShadow:"2px 2px  purple ",color:"white", fontSize:"25px" }}
        >
          See my Resume <img src="icons8-star-94.png" alt="" width="40px"  />
        </button> 
        </div>

    </div>
  )
}

export default Contactme