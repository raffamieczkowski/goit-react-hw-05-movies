import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import api from '../Api/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.getMovieDetails(movieId);
        setMovie(response.data);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Outlet /> {/* Dodany import Outlet */}
    </div>
  );
};

export default MovieDetails;
