import React, { useContext, useState } from "react";
import "./Cart.css";
import { AppContext } from "../../ContextProvider/ContextProvider";
import cancelns from '../Asserts/cancelns.png';
import { Link, useNavigate } from "react-router-dom";
import gpay1 from '../Asserts/gpay1.png';

const Cart = () => {
  const navigate = useNavigate();
  const { all_product, cartItem, addToCart, removeFromCart } = useContext(AppContext);
  const [popUp, setPopUp] = useState(false);

  const getTotalCartAmount = () => {
    return all_product.reduce((total, e) => total + (e.new_price * (cartItem[e.id] || 0)), 0);
  };

  const totalPrice = getTotalCartAmount();
  history.pushState({ totalPrice }, "", window.location.href);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const selectedProducts = all_product
      .filter(e => cartItem[e.id] > 0)
      .map(e => ({
        name: e.name,
        price: e.new_price,
        quantity: cartItem[e.id], // Correct quantity
      }));

    if (selectedProducts.length === 0) {
      alert("No product found in cart!");
      return;
    }

    const productDetails = selectedProducts
      .map(p => `${p.name} - ₹${p.price} (x${p.quantity})`)
      .join(", ");

    data.products = productDetails;
    data.total_price = totalPrice;
    data.access_key = "a8cf2cad-503d-4abc-8d1a-335fd6ad347d";

    if (!data.message) {
      data.message = `Booking request from ${data.name}\nProducts: ${productDetails}\nTotal Price: ₹${totalPrice}`;
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
        navigate("/buy", { state: { new_price: totalPrice } });

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
    <div className="cartitems">
      <Link to='/slider'>
        <div className="shop-now-cart">
          <p>Shop Now</p>
        </div>
      </Link>

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
                <img src={e.image} alt={e.name} className="cartitem-icon" />
                <p>{e.name}</p>
                <p> ₹{e.new_price}</p>
                <p>{e.rating}</p>
                <p> ₹{e.new_price * cartItem[e.id]}</p>
                <img
                  className="remove1"
                  src={cancelns}
                  onClick={() => removeFromCart(e.id)}
                  alt="Delete Item"
                />
                <div onClick={() => addToCart(e.id)}></div>
                <div onClick={() => removeFromCart(e.id)}></div>
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
              <p> ₹{totalPrice}</p>
            </div>
            <hr />
            <div className="cartitem-total-items">
              <h3>Total</h3>
              <h3> ₹{totalPrice}</h3>
            </div>
          </div>

          <button onClick={() => setPopUp(true)}>Buy Now</button>

          {popUp && (
            <div className="popup-overlay">
              <div className="popup-content">
                <div className="cancelns">
                  <div onClick={() => setPopUp(false)}>
                    <img src={cancelns} alt="Close" />
                  </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                  <label>Your Name</label>
                  <input type="text" placeholder="Enter your name" required name="name" />

                  <label>Passcode</label>
                  <input type="password" placeholder="Enter your Password" required name="passcode" />

                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter your Phone Number" required name="phone" pattern="[0-9]{10}" />

                  <label>Your Email</label>
                  <input type="email" placeholder="Enter your email" required name="email" />

                  <div className="btn-con">
                    <Link to='/buy' state={{ new_price: totalPrice }}>
                      <div className="payment-btn">
                        <img src={gpay1} alt="GPay" />
                      </div>
                    </Link>
                  </div>

                  <button className="payment1" type="submit">Download</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
