import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import s from './views/s.module.scss';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "Home" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetails" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "Movies" */),
);

class App extends Component {
  render() {
    return (
      <>
        <AppBar />

        <main>
          <div className={s.containerMain}>
            <Suspense fallback={<p>Loading...</p>}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies/:movieId" component={MovieDetailsPage} />
                <Route path="/movies" component={MoviesPage} />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </div>
        </main>
      </>
    );
  }
}

export default App;
