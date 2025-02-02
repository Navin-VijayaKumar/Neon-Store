import React, { useContext } from 'react';
import './ProductDisplay.css';
import { AppContext} from '../../ContextProvider/ContextProvider.jsx';
import { useParams } from 'react-router-dom';
import ageL from '../Asserts/ageL.png'
import Rating from '../Rating/Rating.jsx';

const ProductDisplay = () => {
    const { all_product } = useContext(AppContext);
    const { productID } = useParams();
    const product = all_product.find((e) => e.id === Number(productID));

    console.log(product);

    return (
        <div className="innerDisplay">
          <div className="inner-display-side">

          <div className="inner-disply-left">

          <div className="inner-game-name">
            <h3>{product.name}</h3>
          </div>
          <div className="inner-display-rating">
            <Rating
            rating={product.rating}
            ></Rating>
          </div>
          <div className="inner-display-img">
            <img src={product.longImage}></img>
          </div>
          <div className="inner-display-des">
            <h3>Description</h3>
            <p>{product.gameDes}</p>
          </div>
          </div>
          <div className="inner-display-right">
            <div className="inner-display-right-img">

            <img src={product.gameTitleImg}></img>
            </div>
            <div className="age-limit">
              <div>

              <img src={ageL}></img>
              </div>
              <div >
                <p>{product.age_limit}+</p>
              </div>
            </div>
            <div className="inner-price">
              <p>₹{product.new_price}</p>
            </div>
            <div className="product-btn">

            <div className="buy-now">
              <button>Buy Now</button>
            </div>
            <div className="cart">
              <button>Add to Cart</button>
            </div>
            <div className="wish">
              <button>Add to Wishlist</button>
            </div>
            </div>
          </div>
          </div>
      </div>
    );
};

export default ProductDisplay;
