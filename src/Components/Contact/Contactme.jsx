import React from 'react'
import  logo from '../../../src/code icon.png'
function Contactme() {
  return (
    <div className='row m-5'>
   <div className='col-lg-6'><img src="conatctme-1-removebg-preview.png" alt="" width="450px" height="450px"/></div>
   <div className='col-lg-6'>
    <h1 className='contact1'>Contact me</h1>
    <img src={logo} alt="" width="25px"  /><span className='contact2'>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud.</span>
    <div className='row d-flex gap-3 mt-4'>
      <div className="col-md-1 col-sm-2 col-3  ">
            <a href="https://www.linkedin.com/in/v-surya-prakash-a6953421b/">
              <img
                src="icons8-linkedin-48 (1).png"
                width="45px"
                alt=""
                style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
              />
            </a>
            </div>
            <div className='col-md-1 col-sm-2 col-3 '>
              <a href="https://github.com/suryaprakash123456789">
                <img
                  src="icons8-github-64.png"
                  width="45px"
                  alt=""
                  style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
                />
              </a>
            </div>
            <div className='col-md-1 col-sm-2 col-3 '>
              <a href="https://www.instagram.com/vsuryap/?next=%2F">
                <img
                  src="icons8-insta-48.png"
                  width="45px"
                  alt=""
                  style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
                />
              </a>
            </div>
            <div className='col-md-1 col-sm-2 col-3 '>
              <a href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act">
                <img
                  src="icons8-google-48.png"
                  width="45px"
                  alt=""
                  style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
                />
              </a>
            </div>
               <div className='col-md-1 col-sm-2 col-3 '>
                 <a href="https://www.facebook.com/profile.php?id=100046416469121">
                   <img
                                 src="icons8-fb-48.png"
                                 width="45px"
                                 alt=""
                                 style={{ boxShadow: "2px 2px 2px 2px purple", borderRadius: "5px" }}
                               />
                 </a>
               </div>
          
    </div>
        
          <a href="Resume_V Surya Prakash.pdf">
            <button
              className="mx-lg-0 "
              style={{ backgroundColor: "darkblue", margin: "30px 30px",borderRadius: "5px",boxShadow:"2px 2px  purple ",color:"white", fontSize:"25px" }}
            >
              See my Resume <img src="icons8-star-94.png" alt="" width="40px"  />
            </button>
          </a>
      
        </div>

    </div>
  )
}

export default Contactme