import React from 'react'
import  './projects1.css'
import logo from "../../../src/code icon.png";  
function Myprojects() {
  return (
    <div className='row m-5'>
      <div className='col-lg-6'>
        <img src="projects.jpg" alt="" width="500px"/>
      </div>
      <div className='col-lg-6'>
        <h1 className='proj1'>My Projects</h1>
        <h2 className='proj2'>Here are some of my projects</h2>
       
        <img src={logo} alt="" width="25px"  /><span className='proj3'>My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.</span>

      </div>
    </div>
  )
}

export default Myprojects