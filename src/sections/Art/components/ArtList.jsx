import React, { useEffect, useState } from 'react';
import ArtListItem from './ArtListItem';

const ArtList = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(response => response.json())
      .then(data => setArtworks(data));
  }, []);

  return (
    <div className="scroll-container">
      <ul className="art-list">
        {artworks.map(art => (
          <ArtListItem key={art.id} art={art} />
        ))}
      </ul>
    </div>
  );
};

export default ArtList;
