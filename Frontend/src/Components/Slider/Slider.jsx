import React, { useContext, useState } from 'react';
import './Slider.css';
import { AppContext } from '../../ContextProvider/ContextProvider';

const Slider = () => {
  const { all_product } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState(''); 

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? all_product.filter((product) => product.category === selectedCategory)
    : all_product;

  return (
    <div className="slider">
      <div className="fixed">
        <div className="games">
          <div className="heading">
            <h3>Games</h3>
          </div>
          <div className="gamelist">
            <div className="number" onClick={() => setSelectedCategory('Retro')}>
              <p>Retro</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory('Open World')}>
              <p>Open World</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory('Racing')}>
              <p>Racing</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory('Simulation')}>
              <p>Simulation</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory('Story Game')}>
              <p>Story Game</p>
            </div>
            <div className="heading">
              <h3>Product Key</h3>
            </div>
            <div className="number" onClick={() => setSelectedCategory('Windows Key')}>
              <p>Windows Key</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory('Graphic Design')}>
              <p>Graphic Design</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory('Management')}>
              <p>Management</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory('Security')}>
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSelectedCategory('')} // Reset category when searching
        />
      </div>
      <div className="items">
        {filteredProducts.map((product, index) => (
          <div key={index}>
            <div className="item1">
              <img src={product.image} alt={product.name} />
              <div className="name">
                <p>{product.name}</p>
              </div>
              <div className="footer1">
                <div className="offer">
                  <p>-{product.offer_percentage}%</p>
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
  );
};

export default Slider;
