import { films } from "../Data/Film.js";
import Navbar from "../Components/Navbar.jsx";
import Card from "../Components/Card.jsx";


function Home() {

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-5 m-20">
        {films.map((film, index) => (
          <Card key={index} film={film} index={index} />
        ))}
      </div>
    </>
  );
}

export default Home;
