import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/Home.jsx";
import MovieSearch from "./Pages/MovieSearch.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [films,setFilms] = useState([]);
  const [recentViewed, setRecentViewed] = useState([]);
  const [showRecent, setShowRecent] = useState(false);
  const [id, setId] = useState(JSON.parse(localStorage.getItem("recentViewed")) || []);
  const movieTitles = ["Inception","The Dark Knight","Interstellar","The Godfather","Pulp Fiction","Fight Club","Forrest Gump","The Matrix","The Shawshank Redemption","The Lord of the Rings: The Fellowship of the Ring"
  ];
  
  const fetchFilms = async()=>{
    try{
      const responses = await Promise.all(
        movieTitles.map((name) => axios.get(`https://www.omdbapi.com/?apikey=d420cdfe&t=${name}`)
        )
      );
      setFilms(responses.map(res => res.data))
    } catch(error){
      console.error("Error=",error)
    }
  };

  const fetchRecent = async()=>{
    try{
      const responses = await Promise.all(
        id.map((i) => axios.get(`https://www.omdbapi.com/?apikey=d420cdfe&i=${i}`)
        )
      );
      setRecentViewed(responses.map(res => res.data))
    } catch(error){
      console.error("Error=",error)
    }
  };
  useEffect(()=>{
    fetchFilms();
  },[])

  useEffect(()=>{
    fetchRecent();
    handleShowRecent()
  },[id])
  
 const handleRecent = (movieId) => {

    if(!id.includes(movieId)){
      setId((prevId) => {
        const updatedIds = [movieId, ...prevId]; // Add new movie ID to the start
        localStorage.setItem("recentViewed", JSON.stringify(updatedIds)); // Store updated list
        return updatedIds; // Update state
      });
    }
  };
  // Show Recent Section 
  function handleShowRecent(){
    id? setShowRecent(true): setShowRecent(false)
  }

  return (
    <Router basename="/Movie-Search-App">
      <Routes>
        <Route path="/" element={<Home films={films} handleRecent={handleRecent} showRecent={showRecent} recentViewed={recentViewed}/>} />
        <Route path="/movie-search/:id" element={<MovieSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
