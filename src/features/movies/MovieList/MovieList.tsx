import "./MovieList.module.scss";
import MovieItem from "../MovieItem/MovieItem";

interface MovieListProps {
  movies: any;
  updateSelectedMovie: Function;
}

const MovieList = ({ movies, updateSelectedMovie }: MovieListProps) => {
  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap">
        {movies.map((movie: any) => (
          <MovieItem
            key={movie.id}
            updateSelectedMovie={() => updateSelectedMovie(movie.id)}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
