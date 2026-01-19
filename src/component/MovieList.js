import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-8">
      <h1 className="text-white text-2xl font-semibold mb-4">
        {title}
      </h1>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
