import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Api/Api';
import styles from './Cast.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await api.getMovieCredits(movieId);
        setCast(response.cast);
      } catch (error) {
        console.error('Failed to fetch movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={styles['cast-container']}>
      <h2>Movie Cast</h2>
      {cast.map((actor) => (
        <div className={styles['cast-item']} key={actor.id}>
          <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} className={styles['cast-image']} />
          <p className={styles['cast-name']}>{actor.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
