import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import gamel1 from '../Asserts/gamel1.png';
import search2 from '../Asserts/search2.png';
const Navbar = () => {
  return (
    <div className='all'>

        <div className="title">
   <div className="comp">
<div>

      <img src={gamel1} className='logo' alt='Logo' />
</div>
<div>

      <h2 className='neontext'>Neon Store</h2>
</div>
   </div>
      </div>
       
      <ul id="nav-list">
      <Link to='/home'><li>Home</li></Link> 
      <Link to='/news'><li>News</li></Link> 
      <Link to='/contact'><li>Contact</li></Link> 
      <Link to='/about'><li>About</li></Link> 
        
       
    <Link to='/login' > <button className='button'>Login</button>  </Link>
       </ul>
   <div className="search">
    <Link to='/slider'>
        <img src={search2} alt="" />
        </Link>
      </div>

    </div>
  )
}

export default Navbar