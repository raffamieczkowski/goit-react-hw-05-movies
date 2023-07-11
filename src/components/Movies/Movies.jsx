import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Movies.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    try {
      navigate(`/movies/results?query=${searchQuery}`);
    } catch (error) {
      console.error('Failed to search movies:', error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch} className={styles['search-form']}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
          className={styles['search-input']}
        />
        <button type="submit" className={styles['search-button']}>Search</button>
      </form>
    </div>
  );
};

export default Movies;
