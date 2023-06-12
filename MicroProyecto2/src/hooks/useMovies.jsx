import React, { useState, useEffect, useCallback } from "react";
import {
  fetchApi,
  fetchProxEstrenos,
  fetchById,
  fetchActors,
  fetchMultipleMovies,
} from "../utils/tmdb-api";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [estrenos, setEstrenos] = useState([]);
  const [currMovie, setCurrMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [fechaEstreno, setFechaEstreno] = useState("");
  //genres.map((genre) => {setGenre(genre.name)})

  const getUpcoming = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchProxEstrenos(setEstrenos, setFechaEstreno);
      setEstrenos(data.results);
      setIsLoading(false);
      return estrenos;
    } catch (error) {}
  }, []);

  const getAMovie = async () => {
    getMovies();
  };

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchApi(setMovies);
      setMovies(data.results);

      setIsLoading(false);
      return movies;
    } catch (error) {}
  }, []);

  const getMovieId = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const { data } = await fetchById(
        setCurrMovie,
        setGenres,
        setLanguages,
        id
      );
      setCurrMovie(data);

      setIsLoading(false);
      return currMovie;
    } catch (error) {}
  }, []);

  const getMultipleMovies = async (ListOfIds) => {
    console.log("Entro aca?");
    console.log(ListOfIds);
    setIsLoading(true);
    const { data } = await fetchMultipleMovies(ListOfIds);
    setIsLoading(false);

    return Array.isArray(data) ? data : [data];
  };

  const getActors = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const { data } = await fetchActors(setActors, id);
      setIsLoading(false);
    } catch (error) {}
  }, []);

  return {
    setGenres,
    genres,
    movies,
    estrenos,
    getUpcoming,
    setMovies,
    isLoading,
    setIsLoading,
    getMovies,
    getMovieId,
    currMovie,
    setCurrMovie,
    getActors,
    actors,
    setActors,
    setLanguages,
    languages,
    getMultipleMovies,
    getAMovie,
    fechaEstreno,
  };
}
