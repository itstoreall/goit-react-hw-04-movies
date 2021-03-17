import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import s from './s.module.scss';

const TrendList = ({ state, location }) => {
  // console.log('location', location);
  return (
    <ul className="linksList">
      {state.trends.length > 0 &&
        state.trends.map(
          trend =>
            trend.title !== undefined && (
              <li key={trend.id}>
                <NavLink
                  to={{
                    pathname: `/movies/${trend.id}`,
                    state: { from: location },
                  }}
                >
                  {trend.title}
                </NavLink>
              </li>
            ),
        )}
    </ul>
  );
};

export default withRouter(TrendList);
