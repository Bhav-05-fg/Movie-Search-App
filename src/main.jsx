import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home.jsx';
import Movie from './Pages/Movie.jsx';
import MovieSearch from './Pages/MovieSearch.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:index' element={<Movie />} />
      <Route path='/movie-search/:id' element={<MovieSearch />} />
    </Routes>
  </BrowserRouter>,
)
