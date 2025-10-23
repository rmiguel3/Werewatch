import Header from "../components/Header";
import MovieRow from "../components/MovieRow";
import {moviesArr} from "../utils/movies.js";

const HomePage = () => {

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <MovieRow movies={moviesArr} />
        <MovieRow movies={moviesArr} />
        <MovieRow movies={moviesArr} />
        <MovieRow movies={moviesArr} />
      </main>
    </div>
  );
};

export default HomePage;