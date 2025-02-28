import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className="contact-con">
       <Link to='/slider'>
        
        <div className="shop-now-sec">
          <p>Shop Now</p>
        </div>
        </Link>
    </div>
  )
}

export default Contact