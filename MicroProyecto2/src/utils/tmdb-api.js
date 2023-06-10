const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGFkMjkwODcxN2VjYzk0MWZiNDE2MzRmN2JlMmQ4YyIsInN1YiI6IjY0ODNjNTM4ZTM3NWMwMDBjNTI3MjgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pTcjP4H6fv3C7WnVhYWLK1ejJeOfD0FxPkEzd4wvjXo'
      }
};

const url2 = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
const options2 = {method: 'GET', headers: {accept: 'application/json'}};

export const fetchApi = async(setMovies) => {
    try{
        const response = await fetch(url, options);
        const responseJSON = await response.json();
        setMovies(responseJSON.results)
        return responseJSON;
    } catch(error){

    }
}

export const fetchProxEstrenos = async(setEstrenos) => {
  try{
    const response = await fetch(url2, options2);
    const responseJSON = await response.json();
    setMovies(responseJSON.results)
    return responseJSON;
} catch(error){

}
}
