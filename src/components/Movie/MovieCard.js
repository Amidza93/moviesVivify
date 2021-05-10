import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const MovieCard = ({ movie, rateMovie, deleteMovie }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="movie-card">
      <div className="movie-card card">
        <img className="card-img-top" src={movie.imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating rating={movie.rating} rateMovie={(num) => { rateMovie(movie, num) }} />
            </div>
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating.toFixed(1)}</div>
            {show ? <p>{movie.ratingsCounter}</p> : ''}
          </div>
          {movie.year ? "" : <a onClick={() => deleteMovie(movie)}>Delete</a>}

        </div>
      </div>
    </div>
  )
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
