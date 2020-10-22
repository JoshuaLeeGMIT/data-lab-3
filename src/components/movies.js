import React from 'react';
import { MovieItem } from './movieItem';
import '../App.css';

export class Movies extends React.Component {

  render() {
    return this.props.movies.map((movie) => {
      return <MovieItem movie={movie}></MovieItem>
    })
  }
}
