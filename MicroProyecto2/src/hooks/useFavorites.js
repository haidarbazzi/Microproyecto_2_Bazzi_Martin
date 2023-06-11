import {
  createFavoriteList,
  fetchFavoritesBbyUserId,
  updateFavortiteList,
} from "../firebase/favorites/favorites";

export function useFavorites() {
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

  const removeFavorite = async () => {
    const addNewFavorite = async ({ movieId, listOfIds, favoriteListId }) => {
      const newList = listOfIds.filter((item) => item !== movieId);
      await updateFavortiteList(favoriteListId, {
        listOfIds: newList,
      });

      return {
        updatedListOfIds: newList,
        favoriteListId,
      };
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
    if (isFavorite) {
      return removeFavorite({
        movieId,
        listOfIds,
        favoriteListId,
      });
    } else {
      return addNewFavorite({
        movieId,
        listOfIds,
        favoriteListId,
      });
    }
  };

  const getFavorites = async (userId) => {
    try {
      const favoritesData = await fetchFavoritesBbyUserId(userId);
      console.log(favoritesData);
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
