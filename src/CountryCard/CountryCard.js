import React from 'react';
import './CountryCard.css';
import emptybox from '../images/check-box-empty.svg';
import { toggleStudyStatus } from '../actions';
import { connect } from 'react-redux';


export const CountryCard = ({ name, capital, region, needsStudied, toggleStudyStatus }) => {
  let buttonText = needsStudied ? 'Got It!' : 'Still Learning';
  return(
    <section className='country-card'>
      <p className='country-name'>{name}</p>
      <p className='country-capital'>{capital}</p>
      <p className='country-region'>{region}</p>
      <button className='button-study-status' onClick={() => toggleStudyStatus(name)}
      >{buttonText}</button>
    </section>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleStudyStatus: name => dispatch(toggleStudyStatus(name))
})

export default connect(null, mapDispatchToProps)(CountryCard);
