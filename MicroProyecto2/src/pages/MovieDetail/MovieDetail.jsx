import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import { useMovies } from "../../hooks/useMovies";
import styles from "./MovieDetail.module.css";
import { useFavoritesContext } from "../../contexts/FavoritesContext";
import { useUser } from "../../contexts/UserContext";
import { RESERVAR_MOVIE } from "../../constants/urls";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [estrenada, setEstrenada] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const {
    getMovieId,
    currMovie,
    isLoading,
    setIsLoading,
    genres,
    getActors,
    actors,
    estrenos,
    getUpcoming,
    fechaEstreno,
  } = useMovies();
  const { user } = useUser();
  const { favoriteList, handleFavoriteButton } = useFavoritesContext();

  useEffect(() => {
    if (movieId) {
      getMovieId(movieId);
      getActors(movieId);
      getUpcoming();
      setRefresh(true);
      setIsLoading(false);
    }
  }, [getMovieId]);

  useEffect(() => {
    estrenos.map((estreno) => {
      if (estreno.original_title === currMovie.original_title) {
        setEstrenada(true);
      }
    });
  });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.loadingTxt}>LOADING...</h1>
      </div>
    );
  }

  if (!isLoading && !currMovie) {
    return (
      <div className={styles.container}>
        <h1 className={styles.loadingTxt}>NOT FOUND DATA</h1>
      </div>
    );
  }

  console.log(movieId);
  console.log(favoriteList);
  const isFavorite = favoriteList?.listOfIds?.includes(movieId);
  console.log(isFavorite);

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original/${currMovie.poster_path}`}
        alt={currMovie.original_title}
        className={styles.Image}
      />
      <div className={styles.container}>
        <div className={styles.MovieInfo}>
          <h2 className={styles.Title}>Titulo: {currMovie.original_title} </h2>
          <h3 className={styles.SinopsisTitle}>Sinopsis: </h3>
          <div className={styles.synopsis}>
            <p className={styles.paragraph}>{currMovie.overview}</p>
          </div>

          <div className={styles.InfoSecundaria}>
            <div className={styles.containerGeneros}>
              <h3 className={styles.subTitle}>Generos:</h3>
              {genres.map((genre) => (
                <li className={styles.list} key={genre.name}>
                  {genre.name}
                </li>
              ))}
              <br />
              <h3>Popularidad: {currMovie.popularity}</h3>
              <h3>Duracion: {currMovie.runtime} minutos</h3>
            </div>
            <div className={styles.containerActores}>
              <h3 className={styles.subTitle}>Actores Principales: </h3>
              {actors.map((actor) => (
                <li className={styles.list} key={actor.name}>
                  {actor.name}
                </li>
              ))}
            </div>
          </div>
          <div className={styles.botones}>
            {estrenada ? (
              <h3>PROXIMAMENTE: {fechaEstreno}</h3>
            ) : (
              <>
                <br></br>
                <button className={styles.buton}>RESERVAR</button>
              </>
            )}
            {user && (
              <button
                className={styles.buton}
                type="button"
                onClick={() => {
                  handleFavoriteButton({ movieId: movieId, isFavorite });
                }}
              >
                {isFavorite ? "Eliminar favoritos" : "Agregar favoritos"}
              </button>
            )}
            {/* {user && (
            <Link to={RESERVAR_MOVIE}>
            <span>RESERVA YA!</span>
            </Link>
          )} */}
          </div>
        </div>
      </div>
    </>
  );
}
