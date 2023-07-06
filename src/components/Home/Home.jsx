import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../Api/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await api.getTrendingMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
