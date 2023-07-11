import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import api from '../Api/Api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

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
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />

      <h2>Genres:</h2>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>

      <h2>Additional Information:</h2>
      <ul>
        <li>
          <button onClick={toggleCast}>{showCast ? 'Hide Cast' : 'Show Cast'}</button>
          {showCast && <Cast />}
        </li>
        <li>
          <button onClick={toggleReviews}>{showReviews ? 'Hide Reviews' : 'Show Reviews'}</button>
          {showReviews ? (
            <Reviews movieId={movieId} />
          ) : (
            movie.vote_count === 0 && <p>We don't have any reviews for this movie.</p>
          )}
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
