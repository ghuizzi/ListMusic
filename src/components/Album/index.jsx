import React from 'react';
import './style.css';

export function Album({ album, artist }) {
  const handleClick = () => {
    console.log(album.music);
  };

  return (
    <div className="songsContent" onClick={handleClick}>
      <div className="SongsCard">
        <div className="cardEffect">
          <div className="card">
            <img
              className="img-fluid rounded float-start"
              src={album.picture}
              alt="album"
            />
            <div className="cardDescription">
              <p>Artist: {artist}</p>
              <p>Album: {album.name}</p>
              <p>Description: {album.description}</p>
              <p>Date: {album.age}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
