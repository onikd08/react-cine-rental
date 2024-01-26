import Home from "./pages/Home";
import CartContextProvider from "./providers/CartContextProvider";
import ThemeContextProvider from "./providers/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
        <Home></Home>
      </CartContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
