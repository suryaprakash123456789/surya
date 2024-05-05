import React from 'react'
import logo from "../../../src/code icon.png";
function Skills() {
  return (

    <div className='row '>
     <h1 className='Skills1'>Cloud Infra-Architecture</h1>
     
     <div className='col-md-5 m-5'>
      <div className='row d-flex '>
        <div className='col-md-2 col-sm-3 col-3'><img src="icons8-azure-48.png" alt="" width="50px"/></div>
             <div className='col-md-2 col-sm-3 col-3'><img src="icons8-amazon-web-services-48.png" alt="" width="50px"/></div>
             <div className='col-md-2 col-sm-3 col-3'><img src="icons8-docker-48.png" alt="" width="50px"/></div>
             <div className='col-md-2 col-sm-3 col-3'><img src="icons8-vpn-50.png" alt="" width="50px"/></div>
      </div>
     <br/>

      <img src={logo} alt="" width="25px" /><span className='Skills2'>Experince in cloud architecture for the cloud infrastructure system of the world and provides access to the cloud infrastructure.</span><br/><br/>
      <img src={logo} alt="" width="25px" /><span className='Skills2'>Experince in connecting nearby servers gateways by differnt servers.</span>
      </div>
     <div className='col-md-5 m-5'>
     <img src="cloud-2.png" alt="" width="430px" height="430px"/>
     </div>
    </div>

  )
}

export default Skills
