import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const apiKey = 'e548173527b69af98deb3da87ab1364c';

class MoviesPage extends Component {
  state = {
    inputValue: '',
    findedMovies: [],
  };

  handleSearchMovie = searchQuery => {
    axios
      .get(`/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
      .then(({ data }) => this.setState({ findedMovies: data.results }));
  };

  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.handleSearchMovie(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <>
        <h1>Movies Page</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

        <ul>
          {this.state.findedMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
