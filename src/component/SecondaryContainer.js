import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies?.nowPlayingMovies) return null;

  return (
    <div className="relative z-30 -mt-52 bg-black pt-10">
      <MovieList
        title="Now Playing"
        movies={movies.nowPlayingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
