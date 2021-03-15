import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundPage from './views/NotFoundPage';
import s from './views/Pages.module.scss';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <section className={s.section}>
            <div className={s.containet}>
              <ul>
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
          </section>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
