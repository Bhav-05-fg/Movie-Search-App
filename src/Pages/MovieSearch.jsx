import { useParams } from "react-router";
import Navbar from "../Components/Navbar.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function MovieSearch() {
  const { id } = useParams(); // Get movie ID from URL
  const [film, setFilm] = useState(null);

  // Fetch movie details when ID changes
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=d420cdfe&i=${id}`)
      .then((response) => setFilm(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!film) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <>
      <Navbar />
      <img
        src={film.Poster}
        alt={film.Title}
        className="absolute w-screen h-screen blur-xl brightness-40 grayscale-25 -z-10"
      />
      <div className="relative flex items-center justify-center mb-20 w-screen xl:pt-10 ">
        <div className="flex flex-col md:flex-row md:mx-10 lg:ml-15">
          <img src={film.Poster} alt={film.Title} className=" h-fit w-[80vw] shadow-2xl md:w-70 lg:w-60 xl:w-75 2xl:w-100" />
          <div className="w-[80vw] md:ml-10 md:w-fit">
            <h1 className="text-[40px] uppercase font-bold text-white xl:text-5xl 2xl:text-6xl">
              {film.Title}
            </h1>
            <h3 className="text-neutral-400 font-semibold text-[20px] mb-5 xl:text-3xl">
              {film.Year}
            </h3>
            <h1 className="text-neutral-300 font-bold lg:w-135 xl:w-150 xl:text-lg 2xl:text-xl">Plot:</h1>
              <p className="text-neutral-300 lg:w-135 xl:w-150 xl:text-lg 2xl:text-xl">{film.Plot}</p>
              <h3 className="text-neutral-300 mt-10 lg:w-135 xl:w-150 xl:text-lg 2xl:text-xl">Release Date: {film.Released}</h3>
              <h3 className="text-neutral-300 lg:w-135 xl:w-150 xl:text-lg 2xl:text-xl">Actors: {film.Actors}</h3>
              <h3 className="text-neutral-300 lg:w-135 xl:w-150 xl:text-lg 2xl:text-xl">Director: {film.Director}</h3>
              <h3 className="text-neutral-300 lg:w-135 xl:w-150 xl:text-lg 2xl:text-xl">Language: {film.Language}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieSearch;
