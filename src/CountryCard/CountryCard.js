import React from 'react';
import './CountryCard.css';

const CountryCard = ({name, capital, region}) => {
  return(
    <section className='country-card'>
      <p className='country-name'>{name}</p>
      <p className='country-capital'>{capital}</p>
      <p className='country-region'>{region}</p>
    </section>
  )
}

export default CountryCard;
