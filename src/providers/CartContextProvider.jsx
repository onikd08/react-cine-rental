/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/CartReducer";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  //const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
