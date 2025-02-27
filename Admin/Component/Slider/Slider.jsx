import React from 'react'
import './Slider.css'
import { Link } from 'react-router-dom'
const Slider = () => {
  return (
    <div className='sidebar-all'>
    <div className="admin-slider-main">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="admin-slider-cart-main">
            <>
            <img src=''></img>
            </>
            <>
            <p>Add Product</p>
            </>
        </div>
        </Link>
        <Link to={'/allproducts'} style={{textDecoration:"none"}}>
        <div className="admin-slider-cart-main">
            <>
            <img className='uniqimg' src=''></img>
            </>
            <>
            <p>List Products</p>
            </>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default Slider