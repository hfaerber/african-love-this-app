import React from 'react';
import './CountryCard.css';
import emptybox from '../images/check-box-empty.svg';
import { toggleStudyStatus } from '../actions';
import { connect } from 'react-redux';
import checked from '../images/check-box-checked.svg'


export const CountryCard = ({ name, capital, region, needsStudied, toggleStudyStatus }) => {
  let buttonText = needsStudied ? 'Got It!' : 'Still Learning';
  return(
    <section className='country-card'>
      <p className='country-name'>{name}</p>
      <p className='country-capital'>{capital}</p>
      <p className='country-region'>{region}</p>
      <div className='div-status'>
        <button className='button-study-status' onClick={() => toggleStudyStatus(name)}
        >{buttonText}</button>
        {!needsStudied && <img src={checked} className="img-checkbox"
          alt="checked checkbox" />}
      </div>
    </section>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleStudyStatus: name => dispatch(toggleStudyStatus(name))
})

export default connect(null, mapDispatchToProps)(CountryCard);
