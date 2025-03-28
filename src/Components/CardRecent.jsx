import { useState } from "react";
import { Link } from "react-router";
import { HeartIcon } from "lucide-react";

function CardRecent({ handleFav, recent}) {
  const [fav, setFav] = useState(false);

  function handleFav() {
    setFav(!fav);
  }

  return (
    <div className="flex flex-col justify-center rounded-[5px] bg-white h-auto w-50 p-2 m-2 shadow-lg mb-5 cursor-pointer xl:w-53 2xl:w-55">
      <Link to={`/movie-search/${recent.imdbID}`}>
        <img loading="lazy" className="rounded-[3px] object-cover" src={recent.Poster} alt={recent.Title} />
        <h2 className="mt-3 h-8 w-40 truncate font-semibold text-lg">{recent.Title}</h2>
      </Link>
      <h3 className="text-gray-500 flex justify-between">
        {recent.Year}
      <HeartIcon onClick={handleFav} className={`cursor-pointer ${fav? "fill-pink-500" : null} inline`} />
      </h3>
    </div>
  );
}

export default CardRecent;
