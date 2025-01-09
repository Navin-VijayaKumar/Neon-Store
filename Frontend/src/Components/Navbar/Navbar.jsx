import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='all'>

        <div className="title">

      <img src="" alt='Logo' />
      <h2 className='neontext'>Neon Store</h2>
      </div>
       
      <ul id="nav-list">
      <Link to='/'><li>Home</li></Link> 
      <Link to='/news'><li>News</li></Link> 
      <Link to='/contact'><li>Contact</li></Link> 
      <Link to='/about'><li>About</li></Link> 
        
       
    <Link to='/login' > <button className='button'>Login</button>  </Link>
       </ul>


    </div>
  )
}

export default Navbar