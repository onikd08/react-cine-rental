/* eslint-disable react/prop-types */
import getImageUrl from "../utils/getImageUrl";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const { cover, title, price, rating, genre } = movie;
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
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
        >
          <img src="./assets/tag.svg" alt="" />
          <span>${price} | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
