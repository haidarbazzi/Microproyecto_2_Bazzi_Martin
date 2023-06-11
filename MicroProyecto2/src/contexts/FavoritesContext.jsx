import React, { useContext, createContext, useEffect, useState } from "react";
import { useFavorites } from "../hooks/useFavorites";
import { useUser } from "./UserContext";
import { useMovies } from "../hooks/useMovies";

export const FavoriteContext = React.createContext(null);

const defaultList = {
  id: "",
  userId: "",
  listOfIds: [],
  characters: [],
};

export function FavoritesProvider({ children }) {
  const [favoriteList, setFavoriteList] = useState(defaultList);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const { getFavorites, handleFavorite } = useFavorites();
  const { geMultipletMovieId } = useMovies();

  const handleFavoriteButton = async ({ movieId, isFavorite }) => {
    try {
      //DEBUG
      console.log("mi usuario es ", +user.profile.id);
      console.log("FavoriteList ID: " + favoriteList.id);

      const { updatedListOfIds, favoriteListId } = await handleFavorite({
        movieId,
        isFavorite,
        listOfIds: favoriteList.listOfIds,
        favoriteListId: favoriteList.id,
        userId: user.profile.id,
      });

      //DEBUG
      console.log("UPDATED LIST");
      console.log(updatedListOfIds);
      console.log("FAVORTIE LISTID");
      console.log(favoriteListId);

      let updatedMovies = [];

      if (updatedListOfIds.length > 0) {
        updatedMovies = await geMultipletMovieId(updatedListOfIds);
      }

      setFavoriteList({
        ...favoriteListId,
        userId: user.profile.id,
        listOfIds: updatedListOfIds,
        id: favoriteList.id,
        movies: updatedMovies,
      });
    } catch (error) {
      console.log("Esta fallando cambiando el boton de favs");
    }
  };

  const handleGetFavorites = async () => {
    try {
      setIsLoading(true);
      const data = await getFavorites(user.profile.id);
      setFavoriteList(data || defaultList);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isLoading && user?.id) {
      console.log("entra acA?");
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
