import React from 'react'
import './Navbar.css'
import sg from '../AdminAssets/sg.gif'
const Navbar = () => {
  return (
   <div className='control-panel'>
    <div className="navAdmin">
    <div className='admintext'>
        <h1>Welcome to Admin Panel</h1>
    </div>
 <img  className="adminimg" src={sg} alt="" />

    </div>
    

   </div>
    
  )
}

export default Navbar