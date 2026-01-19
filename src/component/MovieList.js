import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
    console.log("Movies in MovieList:", movies);
    console.log(movies[0]);

    return (
    <div>
        <div>
            <h1>
                {title}
            </h1>
            <div>
                <MovieCard posterPath={movies[0].poster_path} />
            </div>
        </div>
    </div>
);
};
export default MovieList;