import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews && reviews.results.length > 0 ? (
        reviews.results.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
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
