import Navbar from "../Components/Navbar.jsx";
import CardSuggestion from "../Components/CardSuggestion.jsx";
import CardRecent from "../Components/CardRecent.jsx";

function Home({films,handleRecent,recentViewed,showRecent}) {

  return (
    <>
      <Navbar handleRecent={handleRecent} />
      {showRecent ? <div>
          <h1 className="text-white text-3xl font-bold ml-15 lg:ml-28 2xl:text-4xl">RECENT</h1>
          <div className="flex overflow-x-scroll no-scroll md:place-self-center md:h-190 overflow-y-scroll md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-7 my-5 ">
            {recentViewed.length > 0 ? (
              recentViewed.map((recent, index) => <CardRecent key={index} recent={recent} index={index}  />)
            ) : (
              <p className="col-span-5 text-white text-center text-xl font-semibold lg:text-3xl">Loading movies...</p>
            )}
          </div>
        </div>:null}

      <h1 className="text-white text-3xl font-bold ml-15 lg:ml-28 2xl:text-4xl">SUGGESTED</h1>
        <div className="grid grid-cols-2 place-self-center md:h-190 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 my-5 mb-50">
          {films.length > 0 ? (
            films.map((film, index) => <CardSuggestion key={index} film={film} index={index}  />)
          ) : (
            <p className="col-span-5 text-white text-center text-xl font-semibold">Loading movies...</p>
          )}
        </div>
    </>
  );
}

export default Home;
