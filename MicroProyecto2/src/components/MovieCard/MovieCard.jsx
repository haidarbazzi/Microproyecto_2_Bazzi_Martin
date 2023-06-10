import React from 'react'
import styles from './MovieCard.module.css'

export function MovieCard({movie}) {
  const genres = movie.genre_ids;
  let generos = '';
  genres.map((genero) => {
    generos += genero + " ";
  })
  return (
    <>
        <div className={styles.container}>
            <img src={movie.backdrop_path} alt={movie.original_title}/>
            <div className={styles.movieInfo}>
                <h2>Titulo: {movie.original_title}</h2>
                <h3>Lenguaje: {movie.original_language}</h3>
                <h3>Generos: {generos}</h3>
            </div>
        </div>
    </>
  )
}