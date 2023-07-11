import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Api/Api';
import styles from './Reviews.css';

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
      <ul className={styles['review-list']}>
        {reviews.map((review) => (
          <li className={styles['review-item']} key={review.id}>
            <h3 className={styles['review-author']}>{review.author}</h3>
            <p className={styles['review-content']}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
