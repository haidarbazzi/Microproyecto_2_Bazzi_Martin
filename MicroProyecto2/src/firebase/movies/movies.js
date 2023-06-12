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

export async function createMovieReservations(data) {
  return addDoc(collection(db, "movieFuncion"), data);
}

export async function fetchMoviesReservationsbyMovieId(movieId) {
  const movieQuery = query(
    collection(db, "movieFuncion"),
    where("movieId", "==", movieId)
  );

  console.log("QUERY");
  console.log(movieQuery);

  const results = await getDocs(movieQuery);

  //QUERY
  console.log("RESULT");
  console.log(results);

  if (results.size > 0) {
    const movieReservation = results.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));
    return movieReservation[0];
  } else {
    return null;
  }
}

export async function updateReservationList(movieReservationId, data) {
  console.log("Estoy en update");
  const listRef = doc(db, "movieFuncion", movieReservationId);
  return updateDoc(listRef, data);
}
