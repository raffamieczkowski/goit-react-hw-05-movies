import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import api from '../Api/Api';
import styles from './MovieSearchResult.module.css';

const MovieSearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchQueryParam = new URLSearchParams(location.search).get('query');
  const [searchQuery, setSearchQuery] = useState(searchQueryParam || '');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchQuery) {
          const response = await api.searchMovies(searchQuery);
          setSearchResults(response.results);
        }
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/movies/results?query=${searchQuery}`);
  };

  return (
    <div>
      <h1>Search Results</h1>
      <form onSubmit={handleSearch} className={styles['search-bar']}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
          className={styles['search-input']}
        />
        <button type="submit" className={styles['search-button']}>Search</button>
      </form>
      <ul className={styles['search-results-list']}>
        {searchResults.map((movie) => (
          <li className={styles['search-results-item']} key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={styles['search-results-link']}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearchResults;
