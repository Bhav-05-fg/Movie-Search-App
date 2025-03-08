import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './Pages/App.jsx'
import Movie from  "./Pages/Movie.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/movie' element={<Movie/>} />
    </Routes>
  </BrowserRouter>,
)
