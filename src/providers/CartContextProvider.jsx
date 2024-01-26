/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = cart.find((item) => item.id === movie.id);
    if (!found) {
      setCart([...cart, movie]);
      alert("Movie is added");
    } else {
      alert("The movie is already in your cart");
    }
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
