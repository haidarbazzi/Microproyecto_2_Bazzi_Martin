import axios from "axios";

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFkMjkwODcxN2VjYzk0MWZiNDE2MzRmN2JlMmQ4YyIsInN1YiI6IjY0ODNjNTM4ZTM3NWMwMDBjNTI3MjgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pTcjP4H6fv3C7WnVhYWLK1ejJeOfD0FxPkEzd4wvjXo",
  },
};
const url2 =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
const options2 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFkMjkwODcxN2VjYzk0MWZiNDE2MzRmN2JlMmQ4YyIsInN1YiI6IjY0ODNjNTM4ZTM3NWMwMDBjNTI3MjgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pTcjP4H6fv3C7WnVhYWLK1ejJeOfD0FxPkEzd4wvjXo",
  },
};

const options3 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFkMjkwODcxN2VjYzk0MWZiNDE2MzRmN2JlMmQ4YyIsInN1YiI6IjY0ODNjNTM4ZTM3NWMwMDBjNTI3MjgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pTcjP4H6fv3C7WnVhYWLK1ejJeOfD0FxPkEzd4wvjXo",
  },
};

export const fetchApi = async (setMovies) => {
  try {
    const response = await fetch(url, options);
    const responseJSON = await response.json();
    setMovies(responseJSON.results);
    return responseJSON;
  } catch (error) {}
};

export const fetchById = async (setCurrMovie, setGenres, setLanguages, id) => {
  try {
    const urlId = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const response = await fetch(urlId, options3);
    const responseJSON = await response.json();
    setCurrMovie(responseJSON);
    setGenres(responseJSON.genres);
    setLanguages(responseJSON.spoken_languages);
  } catch (error) {}
};

const options4 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFkMjkwODcxN2VjYzk0MWZiNDE2MzRmN2JlMmQ4YyIsInN1YiI6IjY0ODNjNTM4ZTM3NWMwMDBjNTI3MjgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pTcjP4H6fv3C7WnVhYWLK1ejJeOfD0FxPkEzd4wvjXo",
  },
};

export const fetchActors = async (setActors, id) => {
  try {
    const url4 = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const response = await fetch(url4, options4);
    const responseJSON = await response.json();
    setActors(responseJSON.cast.slice(0, 10));
  } catch (error) {}
};
export const fetchProxEstrenos = async (setEstrenos, setFechaEstreno) => {
  try {
    const response = await fetch(url2, options2);
    const responseJSON = await response.json();
    setEstrenos(responseJSON.results);
    setFechaEstreno(responseJSON.dates.minimum)
    return responseJSON;
  } catch (error) {}
};

export const fetchMultipleMovies = async (listOfIds) => {
  consloe.log("DENTRO DEL LA API");
  console.log(listOfIds);
  let lista_de_return = [];
  for (let index = 0; index < listOfIds.length; index++) {
    let urlId = `https://api.themoviedb.org/3/movie/${listOfIds[i]}?language=en-US`;
    let response = await fetch(urlId, options3);
    let responseJSON = await response.json();
    lista_de_return = responseJSON;
  }
};
