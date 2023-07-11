import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../Api/Api';
import styles from './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await api.getTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul className={styles['movie-list']}>
        {movies.map((movie) => (
          <li className={styles['movie-item']} key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={styles['movie-link']}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
