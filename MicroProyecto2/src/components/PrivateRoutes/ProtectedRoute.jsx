import React from "react";
import { useUser } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { LOGIN_URL } from "../../constants/urls";

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <h1>Loading user...</h1>;
  }

  if(!isLoading && !user & user.email === 'jose.jose@123.com'){
    return children;
  } else {
    return <Navigate to={LOGIN_URL} />;
  }
}
