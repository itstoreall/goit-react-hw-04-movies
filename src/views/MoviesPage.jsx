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

  fetchMovie = searchQuery => {
    axios
      .get(`/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
      .then(({ data }) => this.setState({ movies: data.results }));
  };

  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.state.inputValue && this.fetchMovie(this.state.inputValue);
    // this.setState({ inputValue: '' });
  };

  // -----------

  componentDidMount() {
    console.log('componentDidMount');

    this.props.location.search && this.getMovie(this.state.query);
  }

  handleSearchValue = e => {
    this.setState({ query: e.target.value });

    // this.getMovie(e.target.value);
  };

  handleSearchSubmit = e => {
    e.preventDefault();

    this.state.query && this.getMovie(this.state.query);

    this.props.history.push({
      ...this.props.location,
      search: `?query=${this.state.query}`,
    });
    // this.setState({ inputValue: '' });
  };

  getMovie = query => {
    console.log('getMovie:', query);
    axios
      .get(`/3/search/movie?api_key=${apiKey}&query=${query}`)
      .then(({ data }) => this.setState({ newMovies: data.results }));
  };

  render() {
    console.log('state:', this.state);
    return (
      <>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={this.handleSearchSubmit}>
          <input
            className={s.moviesPageFormInput}
            type="text"
            value={this.state.query}
            onChange={this.handleSearchValue}
          />
          {/* <input
            className={s.moviesPageFormInput}
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          /> */}
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
