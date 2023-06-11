import React, { useContext, createContext, useEffect, useState } from "react";
import { useFavorites } from "../hooks/useFavorites";
import { useUser } from "./UserContext";

export const FavoriteContext = React.createContext();
const defaultList = {
  id: "",
  userId: "",
  listOfIds: [],
  characters: [],
};

export function FavoriteContextProvider({ children }) {
  const [favoritesList, setFavoriteList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const { getFavorites } = useFavorites();

  const handleGetFavorites = async () => {
    try {
      const data = await getFavorites(user.id);
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
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoritesContext() {
  return useContext(FavoriteContext);
}
