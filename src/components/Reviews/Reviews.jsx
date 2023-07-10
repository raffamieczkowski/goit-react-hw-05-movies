import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Api/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await api.getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.error('Failed to fetch movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
