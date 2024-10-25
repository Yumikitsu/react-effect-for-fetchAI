import React, { useState, useEffect } from 'react';

const AdviceSlip = ({ addFavourite }) => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>Get More Advice</button>
      <button onClick={() => addFavourite(advice)}>Save to Favourites</button>
    </section>
  );
};

export default AdviceSlip;
