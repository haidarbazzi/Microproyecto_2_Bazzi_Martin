import {
  createFavoriteList,
  fetchFavoritesBbyUserId,
  updateFavortiteList,
} from "../firebase/favorites/favorites";
import { useMovies } from "./useMovies";

export function useFavorites() {
  const { getMultipleMovies } = useMovies();

  const addNewFavorite = async ({ movieId, listOfIds, favoriteListId }) => {
    const newList = [...listOfIds, movieId];
    await updateFavortiteList(favoriteListId, {
      listOfIds: newList,
    });

    return {
      updatedListOfIds: newList,
      favoriteListId,
    };
  };

  const removeFavorite = async ({ movieId, listOfIds, favoriteListId }) => {
    const newList = listOfIds.filter((item) => item !== movieId);

    await updateFavortiteList(favoriteListId, {
      listOfIds: newList,
    });

    return {
      updatedListOfIds: newList,
      favoriteListId,
    };
  };

  const handleFavorite = async ({
    movieId,
    isFavorite,
    listOfIds = [],
    favoriteListId,
    userId,
  }) => {
    let currentFavorites = {
      listOfIds,
      favoriteListId,
    };

    console.log("Este es mi usuario y el id de la lista de favoritos de el.");
    console.log({ userId, favoriteListId });

    if (!favoriteListId && userId) {
      const newList = await createFavoriteList({
        listOfIds: [],
        userId,
      });

      currentFavorites = {
        listOfIds: [],
        favoriteListId: newList.id,
      };
    }

    const payload = {
      movieId,
      listOfIds: currentFavorites.listOfIds,
      favoriteListId: currentFavorites.favoriteListId,
    };

    console.log("Este es mi payload");
    console.log(payload);

    if (isFavorite) {
      return removeFavorite(payload);
    } else {
      return addNewFavorite(payload);
    }
  };

  const getFavorites = async (userId = "") => {
    try {
      console.log("Hace Fetch?");
      const favoritesData = await fetchFavoritesBbyUserId(userId);

      console.log("FAVORITES DATA");
      console.log(favoritesData);
      let moviesList = [];

      if (favoritesData?.listOfIds.lenght > 0) {
        console.log("llega a pedir a la api?");
        moviesList = await getMultipleMovies(favoritesData?.listOfIds);
      }

      //OJO CON ESTO
      const data = {
        ...favoritesData,
        listOfIds: moviesList,
      };

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getFavorites,
    handleFavorite,
    removeFavorite,
    addNewFavorite,
  };
}
