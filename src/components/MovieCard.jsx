/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import getImageUrl from "../utils/getImageUrl";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import tag from "../assets/tag.svg";
import { CartContext } from "../providers/CartContextProvider";

const MovieCard = ({ movie }) => {
  const { cover, title, price, rating, genre } = movie;
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(false);

  const { handleAddToCart } = useContext(CartContext);

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowMovieModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  };

  return (
    <>
      {showMovieModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
      )}
      <figure
        onClick={() => handleMovieSelection(movie)}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer"
      >
        <img
          className="w-full object-cover"
          src={getImageUrl(cover)}
          alt={title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
          <Rating rating={rating} />
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(e) => handleAddToCart(e, movie)}
          >
            <img src={tag} alt="tag" />
            <span>${price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
