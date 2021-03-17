import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const MovieList = ({ movies, match, location }) => {
  return (
    <ul className="linksList">
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `${match.url}/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
