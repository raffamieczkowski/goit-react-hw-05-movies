import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDeatils/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';
import MovieSearchResults from './MovieSearchResult/MovieSearchResult';

import './app.css';
import './Home/Home.css';
import './Movies/Movies.css';
import './MovieDeatils/MovieDetails.css';
import './Cast/Cast.css';
import './Reviews/Reviews.css';
import './SharedLayout/SharedLayout.css';
import './MovieSearchResult/MovieSearchResult.css';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies/results" element={<MovieSearchResults />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
