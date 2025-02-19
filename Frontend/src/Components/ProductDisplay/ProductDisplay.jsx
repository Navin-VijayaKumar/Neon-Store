import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { AppContext} from '../../ContextProvider/ContextProvider.jsx';
import { Navigate, useParams } from 'react-router-dom';
import ageL from '../Asserts/ageL.png'
import Rating from '../Rating/Rating.jsx';
import SystemReq from '../SystemReq/SystemReq.jsx';
import cancelns from '../Asserts/cancelns.png'
import gpay1 from '../Asserts/gpay1.png'
import { Link } from 'react-router-dom';
const ProductDisplay = () => {
    const { all_product } = useContext(AppContext);
    const { productID } = useParams();
    const product = all_product.find((e) => e.id === Number(productID));
   const [popUp,setPopUp]=useState(false);

   const onSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const productName = product.name;
    const productPrice = product.new_price;
  
    data.product_name = productName;  
    data.product_price = productPrice; 
  
    data.access_key = "a8cf2cad-503d-4abc-8d1a-335fd6ad347d";
  
    if (data.password) {
      data.passcode = data.password; // Rename "password" to "passcode"
      delete data.password; // Remove the original "password" field
    }
  
    if (!data.message) {
      data.message = `Booking request from ${data.name}`;
    }
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (result.success) {
        console.log("Success:", result);
        alert(result.message);
        event.target.reset();
      } else {
        console.error("Error:", result);
        alert(result.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  

    return (
      <div className="innerDisplay">
        {product ? (
          <div className="inner-display-side">
            <div className="inner-disply-left">
              <div className="inner-game-name">
                <h3>{product.name}</h3>
              </div>
              <div className="inner-display-rating">
                <Rating rating={product.rating} />
              </div>
              <div className="inner-display-img">
                <img src={product.longImage} alt={product.name} />
              </div>
              <div className="inner-display-des">
                <h3>Description</h3>
                <p>{product.gameDes}</p>
              </div>
             
            </div>
    
            <div className="inner-display-right">
              <div className="inner-display-right-img">
                <img src={product.gameTitleImg} alt="Game Title" />
              </div>
              <div className="age-limit">
                <img src={ageL} alt="Age Limit" />
                <p>{product.age_limit}+</p>
              </div>
              <div className="inner-price">
                <p>₹{product.new_price}</p>
              </div>
              <div className="product-btn">
                <div className="buy-now">

                <button onClick={()=>setPopUp(true)}>Buy Now</button>

                </div>
                {popUp && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="cancelns">

                        <div onClick={() => setPopUp(false)}><img src={cancelns}></img></div>
                        </div>
                        <form onSubmit={onSubmit} className="contact-right">
  <label htmlFor="name">Your Name</label>
  <input type="text" placeholder="Enter your name" required name="name" />

  <label htmlFor="passcode">Passcode</label> 
  <input type="password" placeholder="Enter your Password" required name="passcode" />

  <label htmlFor="phone">Phone Number</label>
  <input type="tel" placeholder="Enter your Phone Number" required name="phone" pattern="[0-9]{10}" />

  <label htmlFor="email">Your Email</label>
  <input type="email" placeholder="Enter your email" required name="email" />

  <input type="hidden" name="message" value="Booking request for:" />

  <div className="btn-con">
    <Link to='/buy' state={{ new_price: product.new_price }}>
    <div className="payment-btn">
      <img src={gpay1}></img>
      </div>
      </Link>
  </div>

  <button className="payment" type="submit">Download</button>
</form>


                    </div>
                </div>
            )}
             
                <div className="cart">

                <button>Add to Cart</button>
                </div>
                <div className="wish">

                <button>Add to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
    <div className="sys">

    <SystemReq 
    osMin={product?.osMin}
    osRec={product?.osRec}
    proMin={product?.proMin}
    proRec={product?.proRec}
    memoryMin={product?.memoryMin}
    memoryRec={product?.memoryRec}
    storageMin={product?.storageMin}
    storageRec={product?.storageRec}
    graphicMin={product?.graphicMin}
    graphicRec={product?.graphicRec}
    otherMin={product?.otherMin}
    otherRec={product?.otherRec}
    languages={product?.languages}
/>

    </div>
      </div>
    );
    
};

export default ProductDisplay;
