import React from 'react';
import './StudyContainer.css';
import CountryCard from '../CountryCard/CountryCard';
import StudyForm from '../StudyForm/StudyForm';
import colormap from '../images/africa-map-countries-capitals-color.jpg';
import erroricon from '../images/error.svg';
import { connect } from 'react-redux';
import { filter, getQueryCard, countriesToDisplay } from '../util';

export const StudyContainer = (
  { countries, selectedFilter, searchQuery, error, isLoading }) => {

  const countryCards =
    countriesToDisplay(countries, selectedFilter, searchQuery).map(country => {
        return(<CountryCard
          key={country.name}
          name={country.name}
          capital={country.capital}
          region={country.subregion}
          needsStudied={country.needsStudied}
        />)
    })

  return (
    <div className='div-map-image'>
    <StudyForm />
      <section className='section-card-display'>
        {isLoading && <div className='div-loader'><h3>Loading Study Cards...</h3>

        <div className='div-giphy'>
          <iframe src="https://giphy.com/embed/tkJsL5AIIsg7K"
            className="giphy-embed" allowFullScreen></iframe></div></div>}

        {error && <div className='div-error'>
          <img src={erroricon} className='error-icon'
            alt='error icon'/><h3 className='error-message'>{error} </h3></div>}
        {!error && !isLoading && countryCards}
        {console.log('countrycards', countryCards)}
        {!countryCards.length && <div className="div-no-match">
          <h3 className='h3-no-match'>No matches found</h3></div>}
      </section>
      <img src={colormap} className="img-map"
      alt="map of africa with capital cities" />
    </div>
  )
}

export const mapStateToProps = state => ({
  countries: state.countries,
  selectedFilter: state.selectedFilter,
  searchQuery: state.searchQuery,
  error: state.error,
  isLoading: state.isLoading
})

export default connect(mapStateToProps, null)(StudyContainer);
