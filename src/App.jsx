import { BrowserRouter, Routes, Route } from "react-router";
import Home  from './Pages/Home.jsx' ;
import Movie from  './Pages/Movie.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie' element={<Movie/>} />
      </Routes>
    </>
  )
}

export default App
