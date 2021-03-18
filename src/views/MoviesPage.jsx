import React, { Component } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import queryString from 'query-string';
import s from './s.module.scss';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const apiKey = 'e548173527b69af98deb3da87ab1364c';

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
    axios
      .get(`/3/search/movie?api_key=${apiKey}&query=${query}`)
      .then(({ data }) => this.setState({ newMovies: data.results }));

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
