import axios from 'axios';
import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const apiKey = 'e548173527b69af98deb3da87ab1364c';

class App extends Component {
  state = {
    trends: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `/3/trending/all/day?api_key=${apiKey}&page=1`,
      );
      const trends = response.data.results;
      this.setState({ trends: trends });
      console.log(trends[0]);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Movies
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>

        <ul>
          {this.state.trends.map(
            trend =>
              trend.title !== undefined && (
                <li key={trend.id}>{trend.title}</li>
              ),
          )}
        </ul>
      </>
    );
  }
}

export default App;
