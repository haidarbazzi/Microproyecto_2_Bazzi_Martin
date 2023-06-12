import React, { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import styles from "./FavoritesPage.module.css";
import { useFavoritesContext } from "../../contexts/FavoritesContext";
import { useMovies } from "../../hooks/useMovies";

export default function FavoritesPage() {
  const { favoriteList, isLoading: isLoadingFavorites } = useFavoritesContext();
  const { getMovieId, currMovie, isLoading: isLoadingMovies } = useMovies();
  const { listOfIds } = favoriteList;
  const [listOfMovies, setListOfMovies] = useState([]);
  const [cargando, setCargando] = useState(false);

  // useEffect(() => {
  //   let peliculas = [];
  //   for (let i = 0; i < listOfIds.length; i++) {
  //     getMovieId(listOfIds[i]);
  //     peliculas.push(currMovie);
  //   }
  //   setListOfMovies(peliculas);
  // }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1> Favorites </h1>
          <div className={styles.BigMovieContainer}>
            {isLoadingFavorites ? (
              <p>LOADING</p>
            ) : (
              listOfMovies?.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
