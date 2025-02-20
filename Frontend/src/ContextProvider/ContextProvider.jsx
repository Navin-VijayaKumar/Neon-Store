import React, { useEffect, useState, createContext } from "react";
import DataSet from "../Components/DataSet/DataSet.js";

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
    setAllProduct(DataSet); 
  }, []);

  useEffect(() => {
    setCartItem(getDefaultCart(all_product));
  }, [all_product]);

  const contextValue = { all_product, cartItem, addToCart,removeFromCart};
  console.log(cartItem)
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
