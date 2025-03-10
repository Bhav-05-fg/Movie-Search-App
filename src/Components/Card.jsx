import { useState } from "react";
import { Link } from "react-router";
import { HeartIcon } from "lucide-react";

function Card({ handleFav, film, index }) {
  const [fav, setFav] = useState(false);

  function handleFav() {
    setFav(!fav);
  }

  return (
    <div className="flex flex-col justify-center rounded-[5px] bg-white h-fit w-55 b p-3 shadow-lg mb-5 cursor-pointer">
      <Link to={`/movie/${index}`}>
        <img className="h-75" src={film.Poster} alt={film.Title} />
        <h2 className="mt-3 h-8 truncate font-semibold text-lg">{film.Title}</h2>
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

export default Card;
