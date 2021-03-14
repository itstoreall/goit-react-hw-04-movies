import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import CostItem from './CastItem';
// import ReviewsItem from './';

const Cast = ({ path, url, credits, reviews }) => {
  console.log('credits-Cast', credits.cast);
  // console.log(reviews);
  return (
    <ul>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cost</NavLink>
        </li>
        {/* <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li> */}
      </ul>

      <Route
        path={`${path}/cast`}
        render={() => <CostItem cast={credits.cast} />}
      />
      {/* <Route
        path={`${path}/reviews`}
        render={() => <ReviewsItem reviews={reviews} />}
      /> */}
    </ul>
  );
};

export default Cast;
