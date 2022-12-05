const MovieDetails = ({ selectedMovie }: any) => {
  // console.log(selectedMovie);

  return (
    <div id="movie-details-modal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{selectedMovie.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <h5>{selectedMovie.details}</h5>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
