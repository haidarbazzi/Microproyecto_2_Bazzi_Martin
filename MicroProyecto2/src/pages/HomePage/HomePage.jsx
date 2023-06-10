import React from 'react'
import styles from './HomePage.module.css'
import {MovieCard} from '../../components/MovieCard/MovieCard'
import { useMovies } from '../../hooks/useMovies'

import { useEffect } from 'react'

export function HomePage() {
  const {isLoading, movies, getMovies,setIsLoading} = useMovies();
    useEffect(() => {
    getMovies();
    setIsLoading(false);
    }, [getMovies])

    useEffect(()=>{
      movies.map((movie) =>{
        console.log(movie)
      })
    }, [movies])

    return (
      <> 
          <div className={styles.Container}>
              <h1>Titulo</h1>
              <div className={styles.BigMovieContainer}>
              {isLoading ? (
              <p>LOADING</p>
            ) : (
                movies.map((movie) =>(
                  <MovieCard movie = {movie} key={movie.original_title}/>
                ))
              
              )
            
            
          }
              </div>
          </div>
      </>
    )
}
