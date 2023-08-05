import MovieCard from "./MovieCard";

function MovieList({
  title,
  data,
  myListMovies,
  updateMyListMovies,
  handleToggleAddBtn,
  setIndividualAddListBtn,
  handleMovieClick,
  individualAddListBtn,
}) {
  return (
    <div className="px-8 md:px-16 mt-6 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="gap-2 w-full grid grid-cols-4">
          {data.map((movie) => (
            <MovieCard
              key={movie.id}
              data={movie}
              myListMovies={myListMovies}
              updateMyListMovies={updateMyListMovies}
              handleToggleAddBtn={handleToggleAddBtn}
              handleMovieClick={handleMovieClick}
              individualAddListBtn={individualAddListBtn} // Pasar el estado individual a ModalInfo
              setIndividualAddListBtn={setIndividualAddListBtn} // Pasar la función de actualización del estado individual a ModalInfo
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
