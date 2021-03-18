import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.scss';

const Navigation = () => {
  return (
    <nav className={s.NavList}>
      <NavLink
        exact
        to="/"
        className={s.NavLink}
        activeClassName={s.NavLink__active}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.NavLink}
        activeClassName={s.NavLink__active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
