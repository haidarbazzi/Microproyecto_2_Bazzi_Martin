import {
  createFavoriteList,
  fetchFavoritesBbyUserId,
  updateFavortiteList,
} from "../firebase/favorites/favorites";
import { useMovies } from "./useMovies";

export function useFavorites() {
  const { geMultipletMovieId } = useMovies();

  const addNewFavorite = async ({ movieId, listOfIds, favoriteListId }) => {
    //DEBUG
    console.log("Esta es una lista de ids" + listOfIds);
    console.log(listOfIds);

    const newList = [...listOfIds, movieId];

    //DEBUG
    console.log("NEW LIST");
    console.log(newList);

    //DEBUG
    console.log("ID DE FIREBASE: ", favoriteListId);

    await updateFavortiteList(favoriteListId, {
      listOfIds: newList,
    });

    //DEBUG
    console.log("NEW LIST despues de UPDATE");
    console.log(newList);

    return {
      updatedListOfIds: newList,
      favoriteListId,
    };
  };

  const removeFavorite = async ({ movieId, listOfIds, favoriteListId }) => {
    //DEBUG
    console.log("LLEGA HASTA ACA?");

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
    //DEBUG
    console.log("Entre a handleFavorites", +movieId);
    console.log(favoriteListId);
    console.log("Su userID es " + userId);

    let currentFavorites = {
      listOfIds,
      favoriteListId,
    };

    if (!favoriteListId && userId) {
      //DEBUG
      console.log("Llegue hasta aca");

      const newList = await createFavoriteList({
        listOfIds: [],
        userId,
      });

      //DEBUG
      console.log("El ID de la nueva lista es " + newList.id);

      currentFavorites = {
        listOfIds: [],
        favoriteListId: newList.id,
      };
    }

    const payload = {
      movieId,
      listOfIds,
      favoriteListId: currentFavorites.favoriteListId,
    };

    //DEBUG
    console.log(payload);

    //DEBUG
    console.log(currentFavorites.favoriteListId);

    if (isFavorite) {
      return removeFavorite(payload);
    } else {
      return addNewFavorite(payload);
    }
  };

  const getFavorites = async (userId) => {
    try {
      //DEBUG
      console.log(userId);

      const favoritesData = await fetchFavoritesBbyUserId(userId);
      //DEBUG
      console.log("estoy llegando a get favorites");
      console.log(favoritesData);

      let moviesList = [];

      if (favoritesData?.listOfIds.lenght > 0) {
        moviesList = await geMultipletMovieId(favoritesData?.listOfIds);
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
