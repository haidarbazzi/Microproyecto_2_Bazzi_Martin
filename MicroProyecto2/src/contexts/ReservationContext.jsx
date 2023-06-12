import React, { useContext, createContext, useEffect, useState } from "react";
import { useReservation } from "../hooks/useReservation";

export const ReservationContext = createContext();

//PARA CUANDO LA PELICULA TODAVIA NO TENGA RESERVAS
const defaultList = {
  id: "",
  movieId: "",
  sits: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};

export function ReservationContextProvider({ children }) {
  const [reservas, setReservas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useUser();
  const { handleReservation, getReservation } = useReservation();

  //Caundo una persona selecciona una asiento, este le enviara la fila y la columna
  const handleReservationButton = async ({ movieId, fila, columna }) => {
    try {
      const { updatedReservation, movieReservationId } =
        await handleReservation({
          movieId: movieId,
          sits: reservas.sits,
          movieReservationId: reservas.id,
          fila: fila,
          columna: columna,
        });

      setReservas({
        id: movieReservationId,
        sits: updatedReservation.asientos,
        movieId: updatedReservation.movieId,
      });
    } catch (error) {
      console.log("Esta fallando cambiando el boton de favs");
    }
  };

  const handleGetReservas = async () => {
    try {
      setIsLoading(true);
      const data = await getReservation(reservas.movieId);
      console.log(data);
      setReservas(data || defaultList);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isLoading && user?.id) {
      handleGetReservas();
    }
  }, [user]);

  return (
    <ReservationContext.Provider
      value={{
        reservas,
        setReservas,
        setIsLoading,
        isLoading,
        handleReservationButton,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export function useUser() {
  return useContext(ReservationContext);
}
