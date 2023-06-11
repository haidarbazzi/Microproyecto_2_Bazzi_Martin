import React, { useState, useEffect } from 'react'
import styles from './MovieCard.module.css'
import { MOVIE_DETAIL_URL } from '../../constants/urls';
import { Link } from 'react-router-dom/dist';
import { useMovies } from '../../hooks/useMovies';

export function MovieCard({movie}) {
    const {genres, getMovieId, languages} = useMovies()

    useEffect(()=> {
        getMovieId(movie.id);
    }, [])

  return (
    <>
        <div className={styles.container}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} className={styles.movies}/>
            <div className={styles.movieInfo}>

                <Link to={MOVIE_DETAIL_URL(movie.id)}>
                    <span>
                    <h2>Titulo: {movie.original_title}</h2>
                    </span>
                </Link>

                <h3>Lenguajes: </h3>
                <div className={styles.lanContainer} key={movie.id}>
                {
                    languages.slice(0, 4).map((genre)=> (
                        <li key={genre.name} >{genre.name}</li>
                    ))
                }
                </div>
                <h3>Generos: </h3>
                {
                    genres.slice(0,4).map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                    ))
                }
            </div>
        </div>
    </>
  )
}