import {
  doc,
  getDocs,
  setDoc,
  query,
  collection,
  where,
} from "firebase/firestore";
import { db } from "../config";

export async function createUserProfile(userId, data) {
  return setDoc(doc(db, "users", userId), data);
}

export async function getUserProfile(email) {
  const userQuery = query(collection(db, "users"), where("email", "==", email));

  const results = await getDocs(userQuery);

  if (results.size > 0) {
    const users = results.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));
    return users[0];
  } else {
    return null;
  }
}
