import "./App.scss";
import Header from "./components/Header/Header";
import MovieList from "./features/movies/MovieList/MovieList";
import Loading from "./components/Loading/Loading";
import MovieDetails from "./features/movies/MovieDetails/MovieDetails";
import { useEffect, useState } from "react";
import { Movie } from "./features/movies/models/Movie";
import axios from "axios";
import SearchBar from "./components/Search/SearchBar";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("spiderman");
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    movies[0]
  );
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=20cc8ef3ae472ba6bb427680af879af3&query=${search}&language=${language}`
      )
      .then((res) => {
        setMovies(res.data?.results);
        setSelectedMovie(movies[0]);
      });
  }, [search, language]);

  console.log(movies);

  const updateSelectedMovie = (id: string) => {
    setSelectedMovie(movies.find((m) => m.id === id));
  };

  const searchInput = (cherche: any) => {
    setSearch(cherche);
  };

  const searchLanguage = (lang: any) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      {/* <form className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Entrez le nom d'un film"
          name=""
          id="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search">
          Recherche <span>🔎</span>
        </div>
      </form> */}
      <SearchBar searchInput={searchInput} searchLanguage={searchLanguage} />
      {movies.length ? (
        <>
          <MovieList
            movies={movies}
            updateSelectedMovie={updateSelectedMovie}
          />
          {selectedMovie && <MovieDetails selectedMovie={selectedMovie} />}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
