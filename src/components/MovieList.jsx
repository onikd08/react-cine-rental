import { getAllMovies } from "../fakedata";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = getAllMovies();
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}></MovieCard>
      ))}
    </div>
  );
};

export default MovieList;
