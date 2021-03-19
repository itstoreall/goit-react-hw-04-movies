import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import queryString from 'query-string';
import api from '../api';
import s from './s.module.scss';

class MoviesPage extends Component {
  state = {
    inputValue: '',
    movies: [],
    newMovies: [],
    query: queryString.parse(this.props.location.search).query || '',
  };

  componentDidMount() {
    this.props.location.search && this.getMovie(this.state.query);
  }

  getMovie = query =>
    api.getMovie(query).then(res => this.setState({ newMovies: res }));

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.state.query && this.getMovie(this.state.query);

    this.props.history.push({
      ...this.props.location,
      search: `?query=${this.state.query}`,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            className={s.moviesPageFormInput}
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button className={s.moviesPageFormBtn} type="submit">
            Search
          </button>
        </form>

        <MovieList
          movies={this.state.movies}
          match={this.props.match}
          newMovies={this.state.newMovies}
          pathname={this.props.location.pathname}
          query={this.state.query}
        />
      </>
    );
  }
}

export default MoviesPage;
