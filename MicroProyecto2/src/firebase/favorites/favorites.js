import {
  addDoc,
  collection,
  doc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config";

export async function createFavoriteList() {
  return addDoc(collection(db, "favorites", data));
}

export async function fetchFavoritesBbyUserId(userId) {
  const favoriteQuery = query(
    collection(db, "favorites"),
    where("userId", "==", userId)
  );

  const results = await getDocs(favoriteQuery);

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
  const listRef = doc(db, "favorites", favoriteListId);
  return updateDoc(listRef, data);
}
