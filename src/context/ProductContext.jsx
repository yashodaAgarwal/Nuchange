import { createContext, useReducer, useContext } from "react";
import { productReducer } from "../reducer";

const ProductFromServer = createContext(null);

const ProductProvider = ({ children }) => {
  const [ProductState, productDispatch] = useReducer(productReducer, {
    cart: [],
  });

  return (
    <ProductFromServer.Provider value={{ ProductState, productDispatch }}>
      {children}
    </ProductFromServer.Provider>
  );
};

const useProduct = () => useContext(ProductFromServer);

export { useProduct, ProductProvider };
