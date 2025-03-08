import { useState } from "react";
import { HeartIcon} from "lucide-react";
import { Link } from "react-router";


function Card({ handleFav,film }) {
 const [fav, setFav] = useState(false)
  
  function handleFav(){
    setFav(!fav)
  }

  return (
    <Link to="/movie">
      <div
        className="flex flex-col justify-center rounded-[5px] bg-white h-fit w-55 b p-3 shadow-lg mb-5 cursor-pointer">

        <img
          className="h-75"
          src={film.Poster}
        />
        <h2
          className=" mt-3  h-8 truncate font-semibold text-lg ">
          {film.Title}</h2>
        <h3
          className="text-gray-500 flex justify-between">
          {film.Year} 
          {fav? <HeartIcon onClick={handleFav} className="cursor-pointer fill-pink-500 inline"/>:<HeartIcon onClick={handleFav} className="inline cursor-pointer"/>}
        </h3>
      </div>
    </Link>
  )
}

export default Card