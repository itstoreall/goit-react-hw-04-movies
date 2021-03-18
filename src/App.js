import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
// import NotFoundPage from './views/NotFoundPage';
import s from './views/s.module.scss';

class App extends Component {
  render() {
    return (
      <>
        <AppBar />

        <main>
          <div className={s.containerMain}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/movies/:movieId" component={MovieDetailsPage} />
              <Route path="/movies" component={MoviesPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </main>
      </>
    );
  }
}

export default App;
