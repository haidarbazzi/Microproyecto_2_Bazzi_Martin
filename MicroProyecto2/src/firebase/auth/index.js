import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, googleProvider } from "../config";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//export const registerWithEmailAndPassword = async () => {};
