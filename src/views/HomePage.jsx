import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './s.module.scss';

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
        <h1 className={s.title}>Home Page</h1>
        <ul className="linksList">
          {this.state.trends.length > 0 &&
            this.state.trends.map(
              trend =>
                trend.title !== undefined && (
                  <li key={trend.id}>
                    <NavLink
                      to={`/movies/${trend.id}`}
                      className={s.homePagelink}
                    >
                      {trend.title}
                    </NavLink>
                  </li>
                ),
            )}
        </ul>
      </>
    );
  }
}

export default HomePage;
