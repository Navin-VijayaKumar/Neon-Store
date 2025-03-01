import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import settingns1 from '../Asserts/settingns1.png'
import gamel1 from '../Asserts/gamel1.png';
import search2 from '../Asserts/search2.png';
import Footer from '../Footer/Footer';
const Navbar = () => {
  return (
    <div className='all'>

        <div className="title">

<div>

      <img src={gamel1} className='logo' alt='Logo' />
</div>
<div>

      <h2 className='neontext'>Neon Store</h2>
</div>
      </div>
       
      <ul id="nav-list">
      <Link to='/'><li>Home</li></Link> 
      <Link to='/news'><li>News</li></Link> 
      <Link to='/contact'><li>Contact</li></Link> 
      <Link to='/about'><li>About</li></Link> 
        
       
       </ul>
   
<div className="setting">
<Link to='/cart'>

        <img src={search2}></img>
        </Link>
      </div>



    </div>
  )
}

export default Navbar