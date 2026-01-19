import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieID);

  if (!trailerVideo?.key) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2
                   w-[120vw] h-[120vh]
                   -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default VideoBackground;

