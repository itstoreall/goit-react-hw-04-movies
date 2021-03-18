import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const MovieList = ({ movies, match, location, newMovies, pathname, query }) => {
  console.log(pathname);
  console.log(query);
  return (
    <ul className="linksList">
      {newMovies.map(({ id, title }) => (
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
    // <ul className="linksList">
    //   {movies.map(({ id, title }) => (
    //     <li key={id}>
    //       <NavLink
    //         to={{
    //           pathname: `${match.url}/${id}`,
    //           state: { from: location },
    //         }}
    //       >
    //         {title}
    //       </NavLink>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default withRouter(MovieList);
