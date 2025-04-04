import React from 'react'
import logo from "../../../src/code icon.png";
function Skills() {
  return (

    <div className='row '>
     <h1 className='Skills1'>Cloud Infra-Architecture</h1>
     <div className='col-lg-6 col-md-6 col-sm-12'>
      <div className='row d-flex skill4'>
        <div className='col-md-2 col-sm-3 col-3'><img src="icons8-azure-48.png" alt="" width="50px"/></div>
             <div className='col-md-2 col-sm-3 col-3'><img src="icons8-amazon-web-services-48.png" alt="" width="50px"/></div>
             <div className='col-md-2 col-sm-3 col-3'><img src="icons8-docker-48.png" alt="" width="50px"/></div>
             <div className='col-md-2 col-sm-3 col-3'><img src="icons8-vpn-50.png" alt="" width="50px"/></div>
      </div>
     <br/>

      <p className='Skills2'><img src={logo} alt="" width="25px" />Experince in cloud architecture for the cloud infrastructure system of the world and provides access to the cloud infrastructure.</p><br/>
      <p className='Skills2'><img src={logo} alt="" width="25px" />Experince in connecting nearby servers gateways by differnt servers.</p>
      </div>
     <div className=' col-lg-6 col-md-6 col-sm-12 d-flex  justify-content-center align-items-center '>
     <img src="cloud-2.png" alt="" width="430px" height="430px"/>
     </div>
    </div>

  )
}

export default Skills
