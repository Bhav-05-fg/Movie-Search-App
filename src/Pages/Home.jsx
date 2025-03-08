import { useState,useRef } from 'react';
import { films } from "../Data/Film.js";
import Navbar from "../Components/Navbar.jsx"
import Card from "../Components/Card.jsx"
import axios from 'axios';
import { Link } from 'react-router';


function App() {
  // const [data,setData] = useState([])
  // const searchRef = useRef()
  
  // function handelSearch(){
  //   const query =searchRef.current.value.trim()
  //   axios.get(`http://www.omdbapi.com/?apikey=d420cdfe&t=${query}`)
  //   .then((response=>{
  //     setData(response.data)
  //   }))
  // }


  return (
    <>

      <Navbar /> 
      <div className="grid grid-cols-5 m-20">
        {films.map((film,index)=>{

          return(
            <Link key={index} to="/movie">
              <Card film={film}/>
            </Link>
          )

        })}
      </div>

    </>
  )
}

export default App
