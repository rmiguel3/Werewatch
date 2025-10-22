import Header from "../components/Header";
import MovieCard from "../components/MovieCard";


const HomePage = () => {

  return (
    <div className="min-h-screen w-full p-8 flex flex-col bg-black">
      <Header />
      <ul className="overflow-auto-x flex-1 flex items-center justify-center flex-row space-x-6 no-scrollbar">
        <MovieCard />
        <MovieCard />
      </ul>
    </div>
  );
};

export default HomePage;