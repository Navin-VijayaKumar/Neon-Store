import React, { useContext, useState } from "react";
import "./Slider.css";
import { AppContext } from "../../ContextProvider/ContextProvider";
import { Link } from "react-router-dom";

const Slider = () => {
  const { all_product } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [searchQuery, setSearchQuery] = useState(""); // Separate state for search

  console.log("Selected Category:", selectedCategory);
  console.log("Search Query:", searchQuery);

  // Filter products based on selected category
  const filteredProducts = all_product
    .filter((product) => 
      !selectedCategory || product.category === selectedCategory // If a category is selected, filter by category
    )
    .filter((product) =>
      !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase()) // If there's a search query, filter by product name
    );

  return (
    <div className="slider">
      <div className="fixed">
        <div className="games">
          <div className="heading1">
            <h3>Games</h3>
          </div>
          <div className="gamelist">
            <div className="number" onClick={() => setSelectedCategory("Retro")}>
              <p>Retro</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory("Open World")}>
              <p>Open World</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory("Racing")}>
              <p>Racing</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory("Simulation")}>
              <p>Simulation</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory("Story Game")}>
              <p>Story Game</p>
            </div>
            <div className="heading2">
              <h3>Product Key</h3>
            </div>
            <div className="number" onClick={() => setSelectedCategory("Windows Key")}>
              <p>Windows Key</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory("Graphic Design")}>
              <p>Graphic Design</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory("Management")}>
              <p>Management</p>
            </div>
            <div className="number" onClick={() => setSelectedCategory("Security")}>
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Updating searchQuery, NOT selectedCategory
        />
      </div>

      {/* Display Filtered Items */}
      <div className="items">
        {filteredProducts.map((product, index) => (
          <div className="itemSize" key={index}>
            <Link to={`/product/${product.id}`}>
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
            </Link> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
