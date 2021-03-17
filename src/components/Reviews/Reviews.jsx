import React from 'react';
import s from './Reviews.module.scss';

const Reviews = ({ reviews }) => {
  return (
    <ul className={s.list}>
      {reviews && reviews.results.length > 0 ? (
        reviews.results.map(review => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
