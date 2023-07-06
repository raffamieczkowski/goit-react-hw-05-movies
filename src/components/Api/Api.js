import axios from 'axios';

const API_KEY = '26f6d9f8ffef9d57c5c0faad8d71760f';

const api = {
  getTrendingMovies: async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch trending movies:', error);
    }
  },

  searchMovies: async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to search movies:', error);
    }
  },

  getMovieDetails: async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch movie details:', error);
    }
  },

  getMovieCredits: async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch movie credits:', error);
    }
  },

  getMovieReviews: async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch movie reviews:', error);
    }
  },
};

export default api;
