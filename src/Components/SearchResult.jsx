import { useEffect, useState } from "react";
import { Link } from "react-router";

function SearchResult({ data, saveSearch, handleRecent }) {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (data && data.Search) {
      setSearch(data.Search);
    }
  }, [data]);

  return (
    <div className="flex flex-col transition-all duration-500 no-scroll ease-in-out absolute overflow-scroll top-5 bg-neutral-100 h-120 w-[50vw] rounded-b-2xl pt-8 -z-10">
      {search.map((movie) => (
        <Link key={movie.imdbID} to={`/movie-search/${movie.imdbID}`} onClick={()=>{saveSearch(),handleRecent(movie.imdbID)}}>
          <div className="ml-5 mr-5 mb-5 flex">
            <img src={movie.Poster} alt={movie.Title} className="h-40 w-30 object-cover mr-3 border-0" />
            <h3>{movie.Title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchResult;
