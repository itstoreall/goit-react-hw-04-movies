import { Component, Suspense, lazy } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import s from './views.module.scss';

const MoviePreview = lazy(() =>
  import('../components/MoviePreview' /* webpackChunkName: "MoviePreview" */),
);
const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "Reviews" */),
);

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

  handleGoBack = () => {
    const { location, history } = this.props;

    location.state && location.state.query
      ? history.push({
          pathname: '/movies',
          search: `?query=${location.state.query}`,
        })
      : history.push('/');
  };

  render() {
    const { url, path } = this.props.match;
    const { poster_path, credits, reviews } = this.state;

    return (
      <>
        {poster_path && (
          <>
            <button className={s.goBackBtn} onClick={this.handleGoBack}>
              &#8592; Go back
            </button>
            <MoviePreview state={this.state} />
          </>
        )}

        <div className={s.additionalInfoWrap}>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: {
                    ...this.props.location.state,
                    path: `/movies/${this.state.id}`,
                  },
                }}
              >
                Cost
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: {
                    ...this.props.location.state,
                    path: `/movies/${this.state.id}`,
                  },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <Route
            path={`${path}/cast`}
            render={props => <Cast credits={credits} />}
          />
          <Route
            path={`${path}/reviews`}
            render={props => <Reviews reviews={reviews} />}
          />
        </Suspense>
      </>
    );
  }
}
