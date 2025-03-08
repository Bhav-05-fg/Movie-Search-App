import { Search, Menu } from "lucide-react";

function Navbar({ handelSearch, searchRef }) {
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
          className="w-120 h-10 rounded-[50px] shadow bg-white pl-5 pr-10 outline-0"
          placeholder="Search"
        />
        <Search
          onClick={handelSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 h-5 w-5"
        />
      </div>

      <Menu className="cursor-pointer text-white" />
    </div>
  );
}

export default Navbar;
