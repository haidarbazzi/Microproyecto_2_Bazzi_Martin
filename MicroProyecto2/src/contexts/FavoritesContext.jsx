import React, { useContext, createContext, useEffect, useState } from "react";
import { useFavorites } from "../hooks/useFavorites";
import { useUser } from "./UserContext";
import { useMovies } from "../hooks/useMovies";

export const FavoriteContext = createContext(null);

const defaultList = {
  id: "",
  userId: "",
  listOfIds: [],
  // movies: [],
};

export function FavoritesProvider({ children }) {
  const [favoriteList, setFavoriteList] = useState(defaultList);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useUser();
  const { getFavorites, handleFavorite } = useFavorites();
  const { getMultipleMovies } = useMovies();

  const handleFavoriteButton = async ({ movieId, isFavorite }) => {
    try {
      const { updatedListOfIds, favoriteListId } = await handleFavorite({
        movieId,
        isFavorite,
        listOfIds: favoriteList.listOfIds,
        favoriteListId: favoriteList.id,
        userId: user.id,
      });

      // let updatedMovies = [];

      // if (updatedListOfIds.length > 0) {
      //   updatedMovies = await getMultipleMovies(updatedListOfIds);
      // }

      setFavoriteList({
        ...favoriteListId,
        userId: user.id,
        listOfIds: updatedListOfIds,
        id: favoriteList.id,
        //movies: updatedMovies,
      });
    } catch (error) {
      console.log("Esta fallando cambiando el boton de favs");
    }
  };

  const handleGetFavorites = async () => {
    try {
      setIsLoading(true);
      const data = await getFavorites(user.id);
      console.log(data);
      setFavoriteList(data || defaultList);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isLoading && user?.id) {
      handleGetFavorites();
    }
  }, [user]);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteList,
        setFavoriteList,
        isLoading,
        setIsLoading,
        handleFavoriteButton,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoritesContext() {
  return useContext(FavoriteContext);
}
