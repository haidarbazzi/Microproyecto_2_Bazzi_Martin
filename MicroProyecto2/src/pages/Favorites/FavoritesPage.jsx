import React from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import styles from "./FavoritesPage.module.css";
import { useFavoritesContext } from "../../contexts/FavoritesContext";

export default function FavoritesPage() {
  const { favoriteList, isLoading } = useFavoritesContext();
  const { movies } = favoriteList;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1> Favorites </h1>
          <div className={styles.BigMovieContainer}>
            {isLoading ? (
              <p>LOADING</p>
            ) : (
              movies?.map((movie) => <MovieCard movie={movie} key={movie.id} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
