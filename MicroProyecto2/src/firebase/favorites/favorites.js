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
  //DEBUG
  console.log(
    "Este es el id de favorite " + favoriteListId + " esta es la data "
  );
  console.log(data);

  const listRef = doc(db, "favorites", favoriteListId);

  //DEBUG
  console.log("LIST REF");
  console.log(listRef);

  const mireturn = await updateDoc(listRef, data);

  //DEBUG
  console.log("MI RETRUN");
  console.log(mireturn);

  return mireturn;
}
