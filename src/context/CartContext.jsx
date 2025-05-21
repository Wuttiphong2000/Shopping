import { useContext, createContext, useReducer, useEffect } from "react";
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
  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const addQuantity = (id) => {
    dispatch({ type: "ADD", payload: id });
  };

  const reduceQuantity = (id) => {
    dispatch({ type: "REDUCE", payload: id });
  }

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.products]);
  return (
    <CartContext.Provider
      value={{ ...state, formatMoney, remove, addQuantity, reduceQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
