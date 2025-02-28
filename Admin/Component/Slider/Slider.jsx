import React from 'react'
import './Slider.css'
import c12 from '../AdminAssets/c12.png'
import folder from '../AdminAssets/folder.png'

import { Link } from 'react-router-dom'
const Slider = () => {
  return (
    <div className='sidebar-all'>
    <div className="admin-slider-main">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="admin-slider-cart-main">
            <>
            <img src={c12}></img>
            </>
            <>
            <p>Add Product</p>
            </>
        </div>
        </Link>
        <Link to={'/allproducts'} style={{textDecoration:"none"}}>
        <div className="admin-slider-cart-main">
            <>
            <img className='uniqimg' src={folder}></img>
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