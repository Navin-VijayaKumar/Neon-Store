import React, { useEffect, useState, createContext } from "react";

export const AppContext = createContext(null);

const ContextProvider = (props) => {
  const getDefaultCart = (products) => {
    let cart = {};
    for (let index = 0; index < products.length+1; index++) {
      cart[index] = 0;
    }
    return cart;
  };

  const [all_product, setAllProduct] = useState([]);
  const [cartItem, setCartItem] = useState(getDefaultCart([]));
  const addToCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))

  }
  const removeFromCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }


  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => setAllProduct(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  console.log(all_product);
  const contextValue = { all_product, cartItem, addToCart,removeFromCart};
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
