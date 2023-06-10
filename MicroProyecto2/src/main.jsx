import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import {
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  MOVIE_URL,
} from "./constants/urls.js";
import { Layout } from "./Layout/Layout.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<h1>Home pge</h1>} />
          <Route path={LOGIN_URL} element={<LoginPage />} />
          <Route path={FAVORITES_URL} element={<h1>Favorites pge</h1>} />
          <Route path={MOVIE_URL} element={<h1>Movie pge</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
