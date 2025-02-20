import React, { useContext, useState } from "react";
import "./Cart.css";
import { AppContext } from "../../ContextProvider/ContextProvider";
import cancelns from '../Asserts/cancelns.png';
import { Link } from "react-router-dom";
const Cart = () => {
  const { all_product, cartItem, removeFromCart } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to calculate total cart amount
  const getTotalCartAmount = () => {
    return all_product.reduce((total, e) => {
      return total + e.new_price * cartItem[e.id];
    }, 0);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Rating</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-main">
                <img src={e.image} alt="" className="cartitem-icon" />
                <p>{e.name}</p>
                <p> ₹{e.new_price}</p>
                <p>{e.rating}</p>
                <p> ₹{e.new_price * cartItem[e.id]}</p>
                <img
                  className="remove"
                  src={cancelns}
  
                  onClick={() => removeFromCart(e.id)}
                  alt="Delete Item"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-total-items">
              <p>Subtotal</p>
              <p> ₹{getTotalCartAmount()}</p>
            </div>
            <hr />
           
            <div className="cartitem-total-items">
              <h3>Total</h3>
              <h3> ₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to='/buy' state={{ new_price: getTotalCartAmount }}>

          <button >Proceed To Checkout</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Cart;