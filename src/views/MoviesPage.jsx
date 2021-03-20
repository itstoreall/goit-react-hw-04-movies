import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';
import queryString from 'query-string';
import api from '../api';
import PropTypes from 'prop-types';

const MoviesPage = ({ location, match }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(
    queryString.parse(location.search).query || '',
  );

  const handleMovieSearch = text => {
    setQuery(text);
    getMovie(text);
  };

  useEffect(() => {
    location.search && getMovie(query);
  }, [location.search, query]);

  const getMovie = query => {
    api.getMovie(query).then(res => setMovies(res));
  };

  return (
    <>
      <SearchForm query={query} onSubmit={handleMovieSearch} />
      <MovieList
        match={match}
        movies={movies}
        pathname={location.pathname}
        query={query}
      />
    </>
  );
};

MoviesPage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default MoviesPage;
