import React from 'react'
import "./Experience.css"
import logo from "../../../src/code icon.png";
function Workexperience() {
  return (
    <div className=' row m-5'>
    <div className='col-lg-5' ><img src="Experience-removebg-preview.png" alt="Experience" width="350px"/></div>
    <div className='col-lg-6'>
    <h1 className='exp1'> Work Experience</h1>
    <img src={logo} alt="" width="25px"  /><span className='exp2'>I have worked with many evolving Projects as a Developer, Designer. I have also worked with some well established Domains like DeveOp's and Networking. I love Developing things and that is why I am also involved with many projects. Were I would have a good Exposure to Skills</span>
  
    </div>

    <div className='row m-5 exp2'>
 <h1 className='exp3'>Organizaitions Worked</h1><br/><br/>
       <div className="col-lg-3 d-flex  justify-content-center m-4">
        <img src="microland logo.jpeg" alt="" width={115} className="rounded-3"/>
         </div>
         <div className="col-lg-6  m-4 ">
       
           <h4 className=" fs-7 exp4">Senior Engineer - Deveop's and Networking</h4>
        
           <h5 className='exp5'>
            MicroLand Limited
           </h5>
           <h6 className='exp6'>
           Ecospace, Bellendur, Bangalore - 560037
           </h6>
         
          
         
         </div>
   
   
  
 </div>
    </div>
  )
}

export default Workexperience