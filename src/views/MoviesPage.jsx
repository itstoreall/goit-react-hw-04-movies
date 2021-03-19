import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';
import queryString from 'query-string';
import api from '../api';

const MoviesPage = ({ history, location, match }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(
    queryString.parse(location.search).query || '',
  );

  useEffect(() => location.search && getMovie(query), [location.search, query]);

  const getMovie = query => api.getMovie(query).then(res => setMovies(res));

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    query && getMovie(query);
    history.push({ ...location, search: `?query=${query}` });
  };

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        query={query}
        handleChange={handleChange}
      />
      <MovieList
        match={match}
        movies={movies}
        pathname={location.pathname}
        query={query}
      />
    </>
  );
};

export default MoviesPage;
