import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const TrendList = ({ trends, location }) => (
  <ul className="linksList">
    {trends.length > 0 &&
      trends.map(
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

export default withRouter(TrendList);
