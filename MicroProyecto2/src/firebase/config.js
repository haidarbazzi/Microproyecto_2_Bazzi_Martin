import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsFFaNuzEH6Nrj5Uy9Mt28E_YoNxZMzUI",
  authDomain: "microproyecto2db.firebaseapp.com",
  projectId: "microproyecto2db",
  storageBucket: "microproyecto2db.appspot.com",
  messagingSenderId: "866041023787",
  appId: "1:866041023787:web:3aaebcfecc822f9141896e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
