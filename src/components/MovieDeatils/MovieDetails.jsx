import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import api from '../Api/Api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.getMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const toggleCast = () => {
    setShowCast(!showCast);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className={styles['movie-image']} />

      <h2>Genres:</h2>
      <ul className={styles['genres-list']}>
        {movie.genres.map((genre) => (
          <li className={styles['genres-item']} key={genre.id}>{genre.name}</li>
        ))}
      </ul>

      <h2>Additional Information:</h2>
      <ul className={styles['additional-info']}>
        <li>
          <button onClick={toggleCast} className={styles['toggle-button']}>{showCast ? 'Hide Cast' : 'Show Cast'}</button>
          {showCast && <Cast />}
        </li>
        <li>
          <button onClick={toggleReviews} className={styles['toggle-button']}>{showReviews ? 'Hide Reviews' : 'Show Reviews'}</button>
          {showReviews ? (
            <Reviews movieId={movieId} />
          ) : (
            movie.vote_count === 0 && <p className={styles['reviews-message']}>We don't have any reviews for this movie.</p>
          )}
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
