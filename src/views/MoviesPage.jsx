import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import s from './s.module.scss';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const apiKey = 'e548173527b69af98deb3da87ab1364c';

class MoviesPage extends Component {
  state = {
    inputValue: '',
    movies: [],
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

  render() {
    return (
      <>
        <h1>Movies Page</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className={s.moviesPageFormInput}
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button className={s.moviesPageFormBtn} type="submit">
            Search
          </button>
        </form>

        <ul className="linksList">
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
