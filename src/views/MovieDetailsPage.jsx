import axios from 'axios';
import React, { Component } from 'react';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const apiKey = 'e548173527b69af98deb3da87ab1364c';

export default class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: null,
    release_date: '',
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(`/3/movie/${movieId}?api_key=${apiKey}`);
    console.log(response.data);
    this.setState({ ...response.data });
  }

  render() {
    const { poster_path, title, release_date, overview, genres } = this.state;
    // const URL_POSTER = 'https://image.tmdb.org/t/p/w500';

    // const KEY_POSTER = poster_path;
    // console.log(URL_POSTER);
    // console.log(KEY_POSTER);

    const imgUrl = 'http://image.tmdb.org/t/p/w500' + poster_path;

    return (
      <>
        <h1>Movie Details Page - {this.props.match.params.movieId}</h1>
        <div>
          <img src={imgUrl} alt={this.state.title} />
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map(genre => (
            <span key={genre.name}>{genre.name} </span>
          ))}
        </div>
      </>
    );
  }
}
