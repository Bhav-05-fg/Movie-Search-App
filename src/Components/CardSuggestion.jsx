import { useState } from "react";
import { Link } from "react-router";
import { HeartIcon } from "lucide-react";

function CardSuggestion({ handleFav, film }) {
  const [fav, setFav] = useState(false);

  function handleFav() {
    setFav(!fav);
  }

  return (
    <div className="flex flex-col justify-center rounded-[5px] bg-white h-auto w-[40vw] p-2 m-2 shadow-lg mb-5 cursor-pointer md:w-50 xl:w-53 2xl:w-55">
      <Link to={`/movie-search/${film.imdbID}`}>
        <img loading="lazy" className="rounded-[3px] object-cover" src={film.Poster} alt={film.Title} />
        <h2 className="mt-1 h-7 w-[35vw] truncate font-semibold text-md md:w-40 md:text-lg md:mt-3 md:h-7">{film.Title}</h2>
      </Link>
      <h3 className="text-gray-500 flex justify-between">
        {film.Year}
        {fav ? (
          <HeartIcon onClick={handleFav} className="cursor-pointer fill-pink-500 inline" />
        ) : (
          <HeartIcon onClick={handleFav} className="inline cursor-pointer" />
        )}
      </h3>
    </div>
  );
}

export default CardSuggestion;
