import React from "react";
import mc from "../image/mc.jpg";
import heart from "../icons/heart.png";
import Albums from "../Albums";
const Songs = () => {
  return (
    <div className="songsContent">
      <div className="SongsCard">
        <div>
          <img src={Albums.pic} alt="album" />
          <div className="cardDescription">
            <p>{Albums.name}</p>
            <p>{Albums.Album}</p>
            <p>{Albums.Date}</p>
            <i src={heart}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
