import React from 'react'
import './Slider.css';
const Slider = () => {
  return (
   <div className="slider">
       
         <div className="games">
            <div className="heading">
              <h3>Game</h3>
            </div>
            <div className="gamelist">
        <div className="number">

        <p>ALL</p>
        </div>
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
    <div className="search-bar">
      <input type='text' placeholder='Search'></input>
    </div>
  </div>
  )
}

export default Slider