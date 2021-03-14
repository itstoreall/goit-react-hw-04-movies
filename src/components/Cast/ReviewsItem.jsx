import React from 'react';
// import imgNoFound from './error.jpg';

const ReviewsItem = ({ reviews }) => {
  // const handleImgUrl = url => {
  //   return url ? `https://image.tmdb.org/t/p/w200${url}` : imgNoFound;
  // };

  console.log('reviews', reviews);
  return (
    <ul>
      {reviews &&
        reviews.map((review, idx) => (
          <li key={`${idx}${review.id}`}>
            <p>{review}</p>
          </li>
        ))}
    </ul>
  );
};

export default ReviewsItem;
