import React, { Component } from 'react';

export default class MovieDetailsPage extends Component {
  render() {
    return (
      <>
        <h1>Movie Details Page {this.props.match.params.bookId}</h1>
      </>
    );
  }
}
