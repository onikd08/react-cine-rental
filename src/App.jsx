import Home from "./pages/Home";
import CartContextProvider from "./providers/CartContextProvider";
import ThemeContextProvider from "./providers/ThemeContextProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
        <Home></Home>
        <ToastContainer />
      </CartContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
