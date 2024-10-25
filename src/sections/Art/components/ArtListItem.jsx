import React from 'react';

const ArtListItem = ({ art }) => {
  const { title, artist, imageURL, publicationHistory } = art;
  const fullImageURL = `https://boolean-uk-api-server.fly.dev${imageURL}`;

  return (
    <li>
      <div className="frame">
        <img src={fullImageURL} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {publicationHistory.map((history, index) => (
          <li key={index}>{history}</li>
        ))}
      </ul>
    </li>
  );
};

export default ArtListItem;
