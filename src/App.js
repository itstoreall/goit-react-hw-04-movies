import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';

// e548173527b69af98deb3da87ab1364c
// https://api.themoviedb.org/3/movie/550?api_key=e548173527b69af98deb3da87ab1364c
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTQ4MTczNTI3YjY5YWY5OGRlYjNkYTg3YWIxMzY0YyIsInN1YiI6IjYwNGI4OThkOGEwZTliMDA3OWExY2U0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4y4J0v5i2stJnCmjr_D4HnrTBnU3PxXq20VC9KeLFE

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
    </ul>
    <Route exact path="/" component={HomePage} />
    <Route path="/movies" component={MoviesPage} />
  </>
);

export default App;
