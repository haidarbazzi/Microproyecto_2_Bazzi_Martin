import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom/dist'
import { useMovies } from '../../hooks/useMovies';
import styles from './MovieDetail.module.css'

export default function MovieDetail() {
    const {movieId} = useParams();
    const {getMovieId, currMovie, isLoading, setIsLoading, genres, getActors, actors} = useMovies();
    
    useEffect(()=> {
        if(movieId){
            getMovieId(movieId);
            getActors(movieId);
            setIsLoading(false);
        }
    }, [getMovieId])
    
        if (isLoading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.loadingTxt}>LOADING...</h1>
      </div>
    );
  }

  if (!isLoading && !currMovie) {
    return (
      <div className={styles.container}>
        <h1 className={styles.loadingTxt}>NOT FOUND DATA</h1>
      </div>
    );
  }

  return (
    <>
        <img src={`https://image.tmdb.org/t/p/original/${currMovie.poster_path}`} alt={currMovie.original_title} className={styles.Image}/>
        <div className={styles.container}>
            <div className={styles.MovieInfo}>
                <h2 className={styles.Title}>Titulo: {currMovie.original_title} </h2>
                <h3 className={styles.SinopsisTitle}>Sinopsis: </h3>
                <div className={styles.synopsis}>
                <p className={styles.paragraph}>{currMovie.overview}</p>
                </div>

                <div className={styles.InfoSecundaria}>
                    <div className={styles.containerGeneros}>
                    <h3 className={styles.subTitle}>Generos:</h3>
                    {
                        genres.map((genre)=> (
                            <li className={styles.list} key ={genre.name}>{genre.name}</li>
                        ))
                    }
                    </div>
                    <div className={styles.containerActores}>
                    <h3 className={styles.subTitle}>Actores Principales: </h3>
                        {
                            actors.map((actor) => (
                                <li className={styles.list} key= {actor.name}>{actor.name}</li>
                            ))
                        }
                    </div>
                    
                </div>
                
            </div>
        </div>
    </>
  )

}
