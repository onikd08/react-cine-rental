import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import CartContextProvider from "./providers/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
      <Footer></Footer>
    </CartContextProvider>
  );
}

export default App;
