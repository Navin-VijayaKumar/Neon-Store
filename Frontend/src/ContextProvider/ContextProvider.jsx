import React, { useEffect, useState, createContext } from "react";

export const AppContext = createContext(null);

const ContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItem, setCartItem] = useState({});

  const getDefaultCart = (products) => {
    let cart = {};
    products.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        setAllProduct(data);
        setCartItem(getDefaultCart(data)); // Initialize cart properly
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  };

  return (
    <AppContext.Provider value={{ all_product, cartItem, addToCart, removeFromCart }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
