import React from 'react'
import './Buy.css'
import { useLocation } from 'react-router-dom';

const Buy = () => {
  const location = useLocation();
  const new_price = location.state?.new_price;
       if(new_price>=0)
       {
        var option = {
          key:"",
          key_secret:"",
          new_price:new_price * 100,
          currency:"INR",
          name:"Neon_Store",
          description:"for testing porpose",
          handler: function(response)
          {
            alert(response.razorpay_payment_id);
          },
          prefill:{
            name:"Navin",
            email:"navinv10122004@gmail.com",
            contact:"8940773056"

          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme:{
            color:"#00ffff"
          }
        };
        var pay =new window.Razorpay(option);
        pay.open();
       }
  return (
    <div className='buy-con'>
      <div className="buy-inner">
        <p>Amount:{new_price}</p>
      </div>
      </div>
  )
}

export default Buy