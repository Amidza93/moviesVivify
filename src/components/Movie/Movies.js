import React, { useEffect, useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [shouldFetchMovies, setShouldFetchMovies] = useState(false)


  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, [shouldFetchMovies]);

  const addMovie = (movie) => {
    MovieService.addMovie(movie);
    setShouldFetchMovies(!shouldFetchMovies);

  }

  const rateMovie = (movie, rating) => {
    const { title } = movie;
    MovieService.rateMovie(rating, title);
    setShouldFetchMovies(!shouldFetchMovies);
  }

  const deleteMovie = (movie) => {
    MovieService.deleteMovie(movie);
    setShouldFetchMovies(!shouldFetchMovies)
  }

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList rateMovie={rateMovie} movies={movies} deleteMovie={deleteMovie} />
        </div>

      </div>
      <MovieForm onSubmit={addMovie} />
    </div>
  );
}

export default Movies;
