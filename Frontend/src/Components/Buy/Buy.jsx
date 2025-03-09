import React, { useEffect } from 'react';
import './Buy.css';
import { useLocation } from 'react-router-dom';
import pay1 from '../Asserts/pay1.png'
const Buy = () => {
  const location = useLocation();
  const new_price = location.state?.new_price;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please try again.");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" }); // Force scroll on click

    const options = {
      key: "your_razorpay_key",
      amount: new_price * 100,
      currency: "INR",
      name: "Neon_Store",
      description: "Test transaction",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Navin",
        email: "navinv10122004@gmail.com",
        contact: "8940773056"
      },
      theme: {
        color: "#00ffff"
      }
    };

    const pay = new window.Razorpay(options);
    pay.open();
};


  return (
    <div className='buy-con'>
      <div className="buy-title">
        <p>Payment Section</p>
      </div>
      <div className="buy-inner">
        <p>Amount: {new_price}</p>
        <div onClick={handlePayment}><img src={pay1}></img></div>
      </div>
    </div>
  );
};

export default Buy;
