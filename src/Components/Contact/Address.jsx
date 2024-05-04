import React from 'react'
import  './contact.css'
function Address() {
  return (
    <div className='row m-5'>
      <h1>Address</h1>
      <div className='col-lg-6'>
      <p className='Addrs1'>Vibuthipura Bangalore Karnataka-560037</p>
       <button
            className="mx-lg-0  "
            style={{ backgroundColor: "darkblue", margin: "20px 20px",borderRadius: "5px",boxShadow:"2px 2px  purple ",color:"white", fontSize:"25px" }}
          >
            Vist on Google Maps <img src="icons8-star-94.png" alt="" width="40px"  />
          </button>
    </div>
    <div className='col-lg-6'>
      <img src="Address.jpg" alt="" width={550}/>
     </div>
    </div>
  )
}

export default Address