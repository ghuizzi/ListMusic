import React, { useState } from "react";

import { ListMusicModal } from "./modal";
import "./style.css";

export function Album({ album, artist }) {
  const [modalShow, setModalShow] = useState(false);

  const handleClick = () => {
    setModalShow(true);
  };

  return (
    <>
      <div className="">
        <ListMusicModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          artist={artist}
          album={album.name}
          music={album.music}
        />
        <div className="SongsCard">
          <div className=" " onClick={handleClick}>
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
    </>
  );
}
