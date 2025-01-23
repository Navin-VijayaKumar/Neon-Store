import React, { useEffect, useState, createContext } from "react";
import DataSet from '../Components/DataSet/DataSet.js';
export const AppContext = createContext(null);

const ContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);

  useEffect(() => {
    setAllProduct(DataSet);
  }, []);

  const contextValue = { all_product };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
