import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import api from '../Api/Api';

const MovieSearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await api.searchMovies(searchQuery);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieSearchResults;
