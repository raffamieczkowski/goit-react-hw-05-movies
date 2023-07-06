import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import api from '../Api/Api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await api.searchMovies(searchQuery);
      navigate(`/movies/results?query=${searchQuery}`);
      setSearchQuery('');
    } catch (error) {
      console.error('Failed to search movies:', error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchBar />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;
