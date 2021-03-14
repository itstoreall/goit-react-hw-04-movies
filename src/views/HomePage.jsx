import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const apiKey = 'e548173527b69af98deb3da87ab1364c';

class HomePage extends Component {
  state = {
    trends: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`/3/trending/all/day?api_key=${apiKey}`);
      const { results } = response.data;
      this.setState({ trends: results });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <h1>Home Page</h1>
        <ul>
          {this.state.trends.length > 0 &&
            this.state.trends.map(
              trend =>
                trend.title !== undefined && (
                  <li key={trend.id}>
                    <NavLink to={`/movies/${trend.id}`}>{trend.title}</NavLink>
                  </li>
                ),
            )}
        </ul>
      </>
    );
  }
}

export default HomePage;
