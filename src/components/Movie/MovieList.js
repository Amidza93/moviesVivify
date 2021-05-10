import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, rateMovie, deleteMovie) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.name} movie={movie} rateMovie={rateMovie} deleteMovie={deleteMovie} />
    ))}
  </div>
);

const MovieList = ({ movies, rateMovie, deleteMovie }) => <div>{getMovies(movies, rateMovie, deleteMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
