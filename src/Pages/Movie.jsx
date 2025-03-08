import Navbar from "../Components/Navbar"
import { films } from "../Data/Film.js";

function Movie({index}) {
  return (
    <>
      <Navbar /> 
      <div className="relative flex pl-10 items-center overflow-hidden bg-neutral-800 mt-15 "> 
          <img src={films[index].Poster} alt={films[index].Title} className=" w-400 h-140  blur-xl brightness-40 grayscale-25 "/>
          <div className="absolute flex ">
            <img src={films[index].Poster} alt={films[index].Title} className="shadow-2xl"/>
            <div className="ml-10">
              <h1 className="text-[40px] uppercase font-bold text-white h-[55px]">{films[index].Title}</h1>
              <h3 className="text-neutral-400 font-semibold text-[20px] mb-5">{films[index].Year}</h3>
              <p className="w-150 text-neutral-300">{films[index].Plot}</p>
              <h3 className=" text-neutral-300 mt-10">Release Date: {films[index].Released}</h3>
              <h3 className=" text-neutral-300 ">Actors: {films[index].Actors}</h3>
              <h3 className=" text-neutral-300 ">Directors: {films[index].Director}</h3>
              <h3 className=" text-neutral-300 ">Language: {films[index].Language}</h3>
            </div>
          </div>
      </div>
    
    </>
  )
}

export default Movie
