import { Search, Menu } from "lucide-react";
import SearchResult from './SearchResult.jsx';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import MenuTab from "./MenuTab.jsx";

function Navbar({handleRecent}) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem("searchHistory")) || []);
  const [showHistory, setShowHistory] = useState(false);
  const [menu,setMenu] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    if (query) {
      axios.get(`https://www.omdbapi.com/?apikey=d420cdfe&s=${query}`)
        .then(res => setData(res.data));
    }
  }, [query]);

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value.trim());
    setShowHistory(!value.trim()); // Show history only if input is empty
  };

  // Handle selecting a history item
  const handleHistoryClick = (item) => {
    setQuery(item);
    setShowHistory(false);
  };

  // Save search query to history
  const saveSearch = () => {
    if (query && !searchHistory.includes(query)) {
      const updatedHistory = [query, ...searchHistory].slice(0, 5); // Keep last 5 searches
      setSearchHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    }
  };

  const removeHistoryItem = (item) => {
    const updatedHistory = searchHistory.filter((search) => search !== item);
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };
  


  return (
    <>
    <div className="flex fixed right-0 left-0 top-0 border-1 border-b-neutral-700 bg-black h-15 px-5 justify-between items-center z-100 md:px-10 2xl:h-20">
      <Link to='/'>
        <h1 className="cursor-pointer font-bold text-2xl text-white md:text-3xl 2xl:text-4xl">
          BMDB
        </h1>
      </Link>

      {/* Search Bar Container */}
      <div className="relative">
        <input
          ref={searchRef}
          type="search"
          value={query}
          onChange={handleSearch}
          onFocus={() => setShowHistory(true)}
          onBlur={() => setTimeout(() => setShowHistory(false), 200)} // Delay to allow click on history
          className="w-[50vw] h-10 rounded-[50px] shadow bg-white pl-5 pr-10 outline-0 2xl:h-13 2xl:text-2xl "
          placeholder="Search"
        />
        {showHistory && searchHistory.length > 0 && (
          <div className="absolute top-5 -z-10 pt-5 left-0 w-full bg-white shadow-md rounded-b-lg overflow-hidden">
            {searchHistory.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200 flex justify-between"
              >
                <p className="w-100" onClick={() => handleHistoryClick(item)}>{item}</p>
                <button onClick={() => removeHistoryItem(item)} className="font-bold text-neutral-400 text-sm hover:text-red-300 p-1">X</button>
              </div>
            ))}
          </div>
        )}
        {query ? <SearchResult id={data?.imdbID} data={data} saveSearch={saveSearch} handleRecent={handleRecent} /> : null}
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 h-5 w-5 transition-all" />
      </div>

      <Menu onClick={()=>{setMenu(!menu)}} className="cursor-pointer text-white 2xl:size-8" />

    </div>
    {menu? <MenuTab menu={menu}/>:null}
    </>
  );
}

export default Navbar;
