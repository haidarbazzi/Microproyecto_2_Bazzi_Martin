import React from "react";
import { useUser } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { LOGIN_URL } from "../../constants/urls";

export default function PrivateRoute({ children }) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <h1>Loading user...</h1>;
  }
  console.log("jsdajksdajk");
  console.log(user);
  if (!isLoading && !user) {
    return <Navigate to={LOGIN_URL} />;
  }
  return children;
}
