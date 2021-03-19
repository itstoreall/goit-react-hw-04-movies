import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const MovieList = ({ movies, pathname, query }) => (
  <ul className="linksList">
    {movies.map(({ id, title }) => (
      <li key={id}>
        <NavLink
          to={{
            pathname: `${pathname}/${id}`,
            state: {
              query: query,
            },
          }}
        >
          {title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default withRouter(MovieList);
