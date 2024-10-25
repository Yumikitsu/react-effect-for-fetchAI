import React, { useState } from 'react';
import AdviceSlip from '../Advice/components/AdviceSlip';
import FavouriteSlipsList from '../Advice/components/FavouriteSlipsList';

function AdviceSection() {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (advice) => {
    setFavourites([...favourites, advice]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip addFavourite={addFavourite} />
      <FavouriteSlipsList favourites={favourites} />
    </section>
  );
}

export default AdviceSection;
