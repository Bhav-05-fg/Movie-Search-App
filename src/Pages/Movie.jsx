import { useParams } from "react-router";
import Navbar from "../Components/Navbar";
import { films } from "../Data/Film.js";

function Movie() {
  const { index } = useParams();
  const film = films[index];

  return (
    <>
      <Navbar />
      <div className="relative flex pl-10 items-center overflow-hidden bg-neutral-800 mt-15">
        <img src={film.Poster} alt={film.Title} className="w-400 h-140 blur-xl brightness-40 grayscale-25" />
        <div className="absolute flex">
          <img src={film.Poster} alt={film.Title} className="shadow-2xl" />
          <div className="ml-10">
            <h1 className="text-[40px] uppercase font-bold text-white h-[55px]">{film.Title}</h1>
            <h3 className="text-neutral-400 font-semibold text-[20px] mb-5">{film.Year}</h3>
            <p className="w-150 text-neutral-300">{film.Plot}</p>
            <h3 className="text-neutral-300 mt-10">Release Date: {film.Released}</h3>
            <h3 className="text-neutral-300">Actors: {film.Actors}</h3>
            <h3 className="text-neutral-300">Directors: {film.Director}</h3>
            <h3 className="text-neutral-300">Language: {film.Language}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
