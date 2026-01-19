import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-40 flex-shrink-0">
      <img
        src={IMG_CDN + posterPath}
        alt="Movie Card"
        className="rounded-lg object-cover"
      />
    </div>
  );
};

export default MovieCard;
