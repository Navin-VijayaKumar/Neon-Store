import React from 'react'
import './Slider.css';
import  { useContext } from 'react';

import { AppContext } from '../../ContextProvider/ContextProvider';
const Slider = () => {
  const { all_product } = useContext(AppContext);

  return (
   <div className="slider">
       <div className="fixed">

      
         <div className="games">
            <div className="heading">
              <h3>Game</h3>
            </div>
            <div className="gamelist">
     
        <div className="number">

        <p>Battle Royal</p>
        </div>
        <div className="number">

        <p>Story Game</p>
        </div>
            <div className="heading">
              <h3>Product Key</h3></div>
              <div className="number">

           <p>Windows Key</p>
              </div>
          <div className="number">

               <p>Editing</p>
          </div>
        <div className="number">

           <p>Story Game</p>
         </div>

            </div>
          </div>
            
       </div>
    <div className="search-bar">
      <input type='text' placeholder='Search'></input>
    </div>
    

    <div className="items">
    {all_product.map((product, index) => (
      
      <div key={index}>
            <div className="item1">

            <img src={product.image}></img>
            <p>{product.name}</p>
            <div className="footer1">

            <div className="offer">

            <p>-{product. offer_percentage}%</p>
              </div>
            <div className="price">
            <div className="oldprice">

            <p>₹{product.old_price}</p>
            </div>
            <p>₹{product.new_price}</p>
            </div>
            </div>
          </div>
          </div>
        ))}
        </div>
     
  </div>
  )
}

export default Slider