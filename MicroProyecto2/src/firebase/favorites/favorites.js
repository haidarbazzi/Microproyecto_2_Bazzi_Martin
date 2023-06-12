import {
  addDoc,
  collection,
  doc,
  query,
  updateDoc,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../config";

export async function createFavoriteList(data) {
  return addDoc(collection(db, "favorites"), data);
}

export async function fetchFavoritesBbyUserId(userId) {
  const favoriteQuery = query(
    collection(db, "favorites"),
    where("userId", "==", userId)
  );

  console.log("QUERY");
  console.log(favoriteQuery);

  const results = await getDocs(favoriteQuery);

  //QUERY
  console.log("RESULT");
  console.log(results);

  if (results.size > 0) {
    const favoritesList = results.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));
    return favoritesList[0];
  } else {
    return null;
  }
}

export async function updateFavortiteList(favoriteListId, data) {
  console.log("Estoy en update");
  const listRef = doc(db, "favorites", favoriteListId);
  return updateDoc(listRef, data);
}
