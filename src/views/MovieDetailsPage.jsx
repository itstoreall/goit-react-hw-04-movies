import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

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
      // console.log('response', response.data);
      this.setState({ ...response.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const poster = `https://image.tmdb.org/t/p/w400/${this.state.poster_path}`;
    const { movieId } = this.props.match.params;
    const { url, path } = this.props.match;
    const {
      poster_path,
      title,
      release_date,
      overview,
      genres,
      credits,
      reviews,
    } = this.state;

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
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cost</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          path={`${path}/cast`}
          render={props => <Cast credits={credits} />}
        />
        <Route
          path={`${path}/reviews`}
          render={props => <Reviews reviews={reviews} />}
        />
      </>
    );
  }
}
