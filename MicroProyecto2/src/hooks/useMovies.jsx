import React, { useState, useEffect, useCallback } from 'react'
import { fetchApi } from '../utils/tmdb-api';

export function useMovies() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = useCallback(async() =>{
        try{
            setIsLoading(true);
            const {data} = await fetchApi(setMovies);
            setMovies(data.results);
            setIsLoading(false);
            return movies;
        } catch(error){

        }
    }, [])

  return {
    movies,
    setMovies,
    isLoading, 
    setIsLoading,
    getMovies,
  }
  
}