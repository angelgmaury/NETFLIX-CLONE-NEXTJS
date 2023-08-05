"use client";
import React, { useEffect, useState } from "react";
import FilmIndex from "@/components/filmIndex/FilmIndex";
import NavBar from "@/components/header/NavBar";
import MovieList from "@/components/movies/MovieList";
import data from "@/data/movies.json";
import ModalInfo from "@/components/filmIndex/ModalInfo";

function HomePage() {
  const [myListMovies, setMyListMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [modal, setModal] = useState(false);

  const [individualAddListBtn, setIndividualAddListBtn] = useState({}); // Estado individual para cada MovieCard

  const updateMyListMovies = (updatedMovies) => {
    setMyListMovies(updatedMovies);
    localStorage.setItem("selectedMovies", JSON.stringify(updatedMovies));
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("selectedMovies"));
    setMyListMovies(storedData === null ? [] : storedData);
    window.scrollTo(0, 0);
  }, []);

  const handleToggleAddBtn = (movie) => {
    const movieAlreadyAdded = myListMovies.some((m) => m.id === movie.id);
    let updatedSelectedMovies;

    if (!movieAlreadyAdded) {
      updatedSelectedMovies = [...myListMovies, movie];
    } else {
      updatedSelectedMovies = myListMovies.filter((m) => m.id !== movie.id);
    }

    updateMyListMovies(updatedSelectedMovies);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModal(true);
  };

  return (
    <>
      {modal ? (
        <ModalInfo
          modal={modal}
          setModal={setModal}
          data={data}
          selectedMovie={selectedMovie}
          myListMovies={myListMovies}
          individualAddListBtn={individualAddListBtn} // Pasar el estado individual a ModalInfo
          setIndividualAddListBtn={setIndividualAddListBtn} // Pasar la función de actualización del estado individual a ModalInfo
          handleToggleAddBtn={handleToggleAddBtn}
        />
      ) : null}
      <NavBar />
      <FilmIndex
        modal={modal}
        setModal={setModal}
        handleMovieClick={handleMovieClick}
        selectedMovie={selectedMovie}
      />
      <div className="pb-40 absolute">
        <MovieList
          title="Trending Now"
          data={data}
          handleToggleAddBtn={handleToggleAddBtn}
          handleMovieClick={handleMovieClick}
          myListMovies={myListMovies}
          individualAddListBtn={individualAddListBtn} // Pasar el estado individual a ModalInfo
          setIndividualAddListBtn={setIndividualAddListBtn} // Pasar la función de actualización del estado individual a ModalInfo
        />
        {myListMovies
          ? myListMovies.length > 0 && (
              <MovieList
                title="My List"
                data={myListMovies}
                myListMovies={myListMovies}
                handleToggleAddBtn={handleToggleAddBtn}
                handleMovieClick={handleMovieClick}
                individualAddListBtn={individualAddListBtn} // Pasar el estado individual a ModalInfo
                setIndividualAddListBtn={setIndividualAddListBtn} // Pasar la función de actualización del estado individual a ModalInfo
              />
            )
          : []}
      </div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  );
}

export default HomePage;
