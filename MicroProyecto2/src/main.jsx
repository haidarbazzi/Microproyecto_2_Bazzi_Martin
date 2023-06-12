import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import {
  ALL_RESERVATIONS_URL,
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  MOVIE_DETAIL_URL,
  MOVIE_URL,
  PROFILE_URL,
} from "./constants/urls.js";
import { Layout } from "./Layout/Layout.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import ProfilePage from "./pages/Perfil/ProfilePage.jsx";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute.jsx";
import ProtectedRoute from "./components/PrivateRoutes/PrivateRoute.jsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";
import FavoritesPage from "./pages/Favorites/FavoritesPage.jsx";
import ReservationsPage from "./pages/ReservationsPage/ReservationsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<HomePage />} />
          <Route path={LOGIN_URL} element={<LoginPage />} />
          <Route path={MOVIE_DETAIL_URL()} element={<MovieDetail />} />
          <Route
            path={PROFILE_URL}
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path={FAVORITES_URL}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ALL_RESERVATIONS_URL}
            element={
              <ProtectedRoute>
                <ReservationsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
