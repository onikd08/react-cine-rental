import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../providers/ThemeContextProvider";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
