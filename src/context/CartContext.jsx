import { useContext, createContext, useReducer } from "react";
import products from "../data/product.jsx";
import CartReducer from "../reducer/CartReducer.jsx";
//การสร้าง context
const CartContext = createContext();

const initState = {
  products: products,
  total: 0,
  amount: 0,
};

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};
