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

const url4 = "https://api.themoviedb.org/3/movie/569094/credits?language=en-US";
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
    console.log(responseJSON.cast);
    setActors(responseJSON.cast.slice(0, 10));
  } catch (error) {}
};
export const fetchProxEstrenos = async (setEstrenos) => {
  try {
    const response = await fetch(url2, options2);
    const responseJSON = await response.json();
    setEstrenos(responseJSON.results);
    return responseJSON;
  } catch (error) {}
};

export const fetchMultipleMovies = async (listOfIds) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movies/${listOfIds.join(
        ","
      )}?api_key=YOUR_API_KEY`
    );
    console.log(response.data);
  } catch (error) {}
};
