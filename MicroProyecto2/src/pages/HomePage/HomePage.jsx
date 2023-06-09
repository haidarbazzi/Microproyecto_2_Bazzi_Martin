import React, { useState } from 'react'
import styles from './HomePage.module.css'
import {MovieCard} from '../../components/MovieCard/MovieCard'
import { useMovies } from '../../hooks/useMovies'

import { useEffect } from 'react'
import Slider from '../../components/Slider/Slider'

export function HomePage() {
  const {isLoading, movies, getMovies,setIsLoading, getUpcoming, estrenos, currMovie, getMovieId} = useMovies();
  const [search, setSearch] = useState('')

    useEffect(() => {
        getMovies();
        getUpcoming();
        setIsLoading(false);
    }, [])

    useEffect(()=>{
      }, [estrenos])

    useEffect(()=> {
        setIsLoading(false);
    }, [])

    const sliderDiv = {
      height: '50vh',
      width: '100vw',
    }

    return (
      <> 
          <div className={styles.Container}>
              <div style={sliderDiv}>
                <Slider />
              </div>
              <h1 className={styles.mainTitle}>PELICULAS DISPONIBLES</h1>
              <form onChange={(e) => setSearch(e.target.value)}> 
                <input className={styles.mainInput} placeholder='Ingrese el nombre de la pelicula que desea buscar!'/>
              </form>
            <div className={styles.BigMovieContainer}>
              {isLoading ? (
              <p>LOADING...</p>
            ) : (
                movies.filter((movie) => {
                    return search.toLowerCase() === '' ? movie : movie.original_title.toLowerCase().includes(search)
                }).map((movie) => (
                <MovieCard movie = {movie} key={movie.id} />
                ))
              )
          }
              </div>
              <h1 className={styles.secondTitle}>PROXIMOS ESTRENOS</h1>
        <div className= {styles.BigMovieContainer}>
          {isLoading ? (
              <p>LOADING</p>
            ) : (
                estrenos.map((movie) =>(
                  <MovieCard movie = {movie} key={movie.id} />
                ))
              
              )
          }
        </div>
              
          </div>
      </>
    )
}
