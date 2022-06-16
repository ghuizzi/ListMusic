import React, { useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

export function Favorite({ data, onClick }) {
  const [stateFavorite, setStateFavorite] = useState(false);
  const [colorFavorite, setColorFavorite] = useState('#e323a6');

  const handleFavorite = () => {
    setStateFavorite(!stateFavorite);
    stateFavorite ? setColorFavorite('#e323a6') : setColorFavorite('#000');
    const objMusic = { ...data, state: !stateFavorite };
    onClick(objMusic);
  };

  return <AiTwotoneStar color={colorFavorite} onClick={handleFavorite} />;
}
