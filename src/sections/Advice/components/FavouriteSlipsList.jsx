import React from 'react';

const FavouriteSlipsList = ({ favourites }) => {
  return (
    <section className="favourite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favourites.map((advice, index) => (
          <li key={index}>{advice}</li>
        ))}
      </ul>
    </section>
  );
};

export default FavouriteSlipsList;
