import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store)=> store.movies.trailerVideo);
    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filter_Data = json.results.filter((video) => video.type === "Trailer" && video.site === "YouTube");
        const trailer =filter_Data.length ?  filter_Data[0]: json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        !trailerVideo && getMovieVideo();
    }, []);
}
export default useMovieTrailer;