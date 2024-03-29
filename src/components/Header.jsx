import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import cart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "./CartDetails";
import { CartContext } from "../providers/CartContextProvider";
import { ThemeContext } from "../providers/ThemeContextProvider";

const Header = () => {
  const [showCartDetails, setShowCartDetails] = useState(false);
  const { state } = useContext(CartContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header>
      {showCartDetails && (
        <CartDetails onClose={() => setShowCartDetails(false)} />
      )}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img
                src={darkMode ? sun : moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li onClick={() => setShowCartDetails(true)}>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={cart} width="24" height="24" alt="" />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-0.75rem] left-5 bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
