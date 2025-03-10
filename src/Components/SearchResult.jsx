import { Link } from "react-router";


function SearchResult({ height,data,list}){

  return(
    <div className={` flex flex-row transition-all duration-300 ease-in-out absolute top-5  bg-neutral-100 h-${height} w-120 rounded-b-2xl pt-8 -z-10`}>
      <Link to={`/movie-search/${data.imdbID}`} >
        <div className="ml-5 mr-5 mb-5 flex">
          <img src={data.Poster} alt={data.Title}  className="h-40 w-30 object-cover mr-3"/>
          <h3>{data.Title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default SearchResult;