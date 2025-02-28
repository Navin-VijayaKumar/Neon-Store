import './Display.css';
import React, { useEffect, useState } from 'react';

const Display = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState('');

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError('Failed to fetch products');
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Failed to remove product with id ${id}`);
      }

      await fetchInfo(); 
    } catch (err) {
      console.error(`Error removing product with id ${id}:`, err);
      setError(`Error removing product with id ${id}`);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="listproduct">
      <h1>All Product List</h1>
      {error && <p className="error-message">{error}</p>} 
      <div className="list-all-product">
        <hr />
        {allProducts.length > 0 ? (
          allProducts.map((product, index) => (
            <React.Fragment key={index}>
              <div className="listproduct-format-main listproduct-format">
                <img src={product.image} alt="" className="listproduct-icon" />
                <p>Id:{product.id}</p>
                <p>Name:{product.name}</p>
                <p>Category:{product.category}</p>
                <p>Email:{product.Email}</p> 
                <p>State:{product.state}</p>

                <img
                  onClick={() => removeProduct(product.id)}
                  src=""
                  alt="Remove"
                  className="listproduct-remove"
                />
              </div>
              <hr />
            </React.Fragment>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Display;