import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

function Movie({ poster, title, genres, synopsis }) {
  const truncatedSynopsis = truncateText(synopsis, 500);

  return (
    <div className="Movie">
      <div className="Movie_columns">
        <MoviePoster poster={poster} />
      </div>
      <div className="Movie_columns">
        <h1>{title}</h1>
        <p>{genres}</p>
        <p>{truncatedSynopsis}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
};

function MoviePoster({ poster }) {
  return (
    <img src={poster} alt="Movie Poster" />
  );
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Movie;
