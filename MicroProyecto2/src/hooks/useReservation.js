import {
  createMovieReservations,
  fetchMoviesReservationsbyMovieId,
  updateReservationList,
} from "../firebase/movies/movies";
import { useMovies } from "./useMovies";

export function useReservation() {
  const addNewReservation = async ({
    movieId,
    asientos,
    movieReservationId,
  }) => {
    await updateReservationList(movieReservationId, {
      sits: asientos,
      id: movieId,
    });

    return {
      updatedReservation: [movieId, asientos],
      movieReservationId: movieReservationId,
    };
  };

  //Si no se le  envian asientos, hara un arreglo de asientos vacios. Ya que esto significaría que no se ha reservado ninguno
  //Tambien se le enciaran los valores del asiento nuevo que ocupará
  const handleReservation = async ({
    movieId,
    sits = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    movieReservationId,
    fila,
    columna,
  }) => {
    sits[fila][columna] = 1;

    let currentReservations = {
      sits,
      movieReservationId,
    };

    //Si no hay movieResercationId significa que no se ha creado  por lo que lo creará
    if (!movieReservationId && userId) {
      const newList = await createMovieReservations({
        sits: sits,
        movieId: movieId,
      });

      currentReservations = {
        sits,
        movieReservationId: newList.id,
      };
    }

    const payload = {
      movieId,
      sits: currentReservations.sits,
      movieReservationId: currentReservations.movieReservationId,
    };

    //Va a agregar a la lista de reservaciones
    return addNewReservation(payload);
  };

  const getReservation = async (movieId = "") => {
    try {
      //Va a buscar las reservaciones en la db
      const reservacionesData = await fetchMoviesReservationsbyMovieId(movieId);

      const data = {
        ...reservacionesData,
      };

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getReservation,
    handleReservation,
    addNewReservation,
  };
}
