import React from 'react';
import imgNoFound from './error.jpg';

const Cast = ({ credits }) => {
  const handleImgUrl = url => {
    return url ? `https://image.tmdb.org/t/p/w200${url}` : imgNoFound;
  };

  return (
    <>
      {credits && (
        <ul>
          {credits.cast &&
            credits.cast.map((actor, idx) => (
              <li key={`${idx}${actor.id}`}>
                <img
                  src={handleImgUrl(actor.profile_path)}
                  alt="jj"
                  width="100"
                />
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
