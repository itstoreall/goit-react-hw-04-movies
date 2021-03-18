import React from 'react';
import s from './MoviePreview.module.scss';

const MoviePreview = ({
  state: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  const poster = `https://image.tmdb.org/t/p/w400/${poster_path}`;

  return (
    <div className={s.moviesDetailsWrap}>
      <img src={poster} alt={title} width="250" />
      <div className={s.moviesDetailsContent}>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>{`User Score: ${vote_average * 10}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres.map(genre => (
          <span key={genre.name}>{genre.name} </span>
        ))}
      </div>
    </div>
  );
};

export default MoviePreview;
