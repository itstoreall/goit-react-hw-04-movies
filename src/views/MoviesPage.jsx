import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import queryString from 'query-string';
import api from '../api';
import s from './s.module.scss';

const MoviesPage = ({ history, location, match }) => {
  const [newMovies, setNewMovies] = useState([]);
  const [query, setQuery] = useState(
    queryString.parse(location.search).query || '',
  );

  useEffect(() => location.search && getMovie(query), [location.search, query]);

  const getMovie = query => api.getMovie(query).then(res => setNewMovies(res));

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    query && getMovie(query);
    history.push({ ...location, search: `?query=${query}` });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={s.moviesPageFormInput}
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button className={s.moviesPageFormBtn} type="submit">
          Search
        </button>
      </form>

      <MovieList
        // movies={movies}
        match={match}
        newMovies={newMovies}
        pathname={location.pathname}
        query={query}
      />
    </>
  );
};

export default MoviesPage;
