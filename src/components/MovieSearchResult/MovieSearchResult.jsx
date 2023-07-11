import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import api from '../Api/Api';

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
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieSearchResults;
