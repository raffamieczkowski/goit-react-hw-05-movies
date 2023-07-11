import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import './app.css';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDeatils/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieSearchResults = lazy(() => import('./MovieSearchResult/MovieSearchResult'));

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path="/movies" element={<Suspense fallback={<div>Loading...</div>}><Movies /></Suspense>} />
          <Route path="/movies/:movieId/*" element={<Suspense fallback={<div>Loading...</div>}><MovieDetails /></Suspense>}>
            <Route path="cast" element={<Suspense fallback={<div>Loading...</div>}><Cast /></Suspense>} />
            <Route path="reviews" element={<Suspense fallback={<div>Loading...</div>}><Reviews /></Suspense>} />
          </Route>
          <Route path="/movies/results" element={<Suspense fallback={<div>Loading...</div>}><MovieSearchResults /></Suspense>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
