import React, { useContext, createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { getUserProfile } from "../firebase/users";

export const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      console.log(firebaseUser);
      console.log("waka");
      setIsLoading(true);
      if (firebaseUser && !user) {
        const profile = await getUserProfile(firebaseUser.email);
        setUser({ profile });
      } else {
        console.log("entra aca?");
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
