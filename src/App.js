import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundPage from './views/NotFoundPage';
import s from './views/s.module.scss';

class App extends Component {
  render() {
    return (
      <>
        <header className={s.pageHeader}>
          <div className={s.containerHeader}>
            <ul className={s.NavList}>
              <li>
                <NavLink
                  exact
                  to="/"
                  className={s.NavLink}
                  activeClassName={s.NavLink__active}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={s.NavLink}
                  activeClassName={s.NavLink__active}
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <div className={s.containerMain}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/movies/:movieId" component={MovieDetailsPage} />
              <Route path="/movies" component={MoviesPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </main>
      </>
    );
  }
}

export default App;
