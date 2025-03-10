import { Search, Menu} from "lucide-react";
import SearchResult from './SearchResult.jsx'
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Navbar() {

  const [data, setData] = useState({})
  const [list, setList] = useState(false)
  const [height,setHeight] = useState(0);
  const [query,setQuery] = useState(''); 
  const searchRef = useRef()
  
    useEffect(()=>{
      axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=d420cdfe&t=${query}`)
      .then(Response => setData(Response.data))
    },[query])


  return (
    <div className="flex fixed right-0 left-0 top-0 border-nav bg-black h-15 px-10 justify-between items-center z-10">
      <h1 className="cursor-pointer font-extrabold text-[40px] text-white">
        BMDB
      </h1>

      {/* Search Bar Container */}
      <div className="relative">
        <input
          ref={searchRef}
          type="search"
          onFocus={()=>{setHeight('100'),setList(true)}}
          onBlur={() => setTimeout(() => setList(false), 200)}
          onChange={(e)=>{setQuery(e.target.value.trim())}}
          className="w-120 h-10 rounded-[50px] shadow bg-white pl-5 pr-10 outline-0 "
          placeholder="Search"
        />
        {list? <SearchResult height={height} id={data.imdbId} data={data} list={list}/>: ""}
        <Search
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 h-5 w-5 transition-all `}/>
      </div>
      <Menu className="cursor-pointer text-white" />
    </div>
  );
}

export default Navbar;
