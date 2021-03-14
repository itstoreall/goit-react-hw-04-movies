import React, { Component } from 'react';
import axios from 'axios';
// import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const apiKey = 'e548173527b69af98deb3da87ab1364c';

export default class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: null,
    release_date: '',
    overview: null,
    genres: [],
    credits: null,
    reviews: null,
  };

  async componentDidMount() {
    try {
      const { movieId } = this.props.match.params;
      const response = await axios.get(
        `/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,reviews`,
      );
      console.log('response', response.data);
      this.setState({ ...response.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { poster_path, title, release_date, overview, genres } = this.state;
    const { movieId } = this.props.match.params;
    const { url, path } = this.props.match;
    const poster = `https://image.tmdb.org/t/p/w400/${poster_path}`;
    const credits = this.state.credits;
    const reviews = this.state.reviews;
    console.log('credits', credits);
    console.log('reviews', reviews);
    return (
      <>
        {poster_path && (
          <>
            <h1>Movie Details Page - {movieId}</h1>
            <div>
              <img src={poster} alt={title} />
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
        )}

        <h3>Additional information</h3>
        {credits && reviews && (
          <Cast
            id={movieId}
            url={url}
            path={path}
            credits={this.state.credits}
            reviews={this.state.reviews}
          />
        )}
      </>
    );
  }
}
