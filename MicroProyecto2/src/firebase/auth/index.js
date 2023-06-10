import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, googleProvider } from "../config";
import { createUserProfile } from "../users";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const { isNewUser } = getAdditionalUserInfo(result);

    if (isNewUser) {
      await createUserProfile(result.user.uid, {
        email: result.user.email,
        admin: false,
        favorites: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    console.log();
    await signOut(auth);
    console.log("se salio");
  } catch (error) {
    console.log(error);
  }
};

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
    await createUserProfile(result.user.uid, { email, password });
  } catch (error) {
    console.log(error);
  }
};

export const loginEmailAndPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
