import style from "./MovieItem.module.scss";

const MovieItem = ({ movie, updateSelectedMovie }: any) => {
  // console.log(style);

  // console.log(movie.img);

  return (
    <div
      onClick={updateSelectedMovie}
      className="movie-list d-flex flex-wrap justify-content-center"
      style={{ cursor: "pointer" }}
      data-bs-target="#movie-details-modal"
      data-bs-toggle="modal"
    >
      <div className={style.card + " card text-center m-2"}>
        <img
          className="card-img-top"
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
              : "./assets/img/poster.jpg"
          }
          alt={"Affiche du film: " + movie.title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <h4>{movie.vote_average.toFixed(1)}/10 ⭐ </h4>
          <hr className="w-75 mx-auto" />
          <p className="card-text">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
