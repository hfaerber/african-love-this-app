import React from 'react';
import './StudyContainer.css';
import CountryCard from '../CountryCard/CountryCard';
import StudyForm from '../StudyForm/StudyForm';
import colormap from '../images/africa-map-countries-capitals-color.jpg'
import { connect } from 'react-redux';
import { filter, getQueryCard, countriesToDisplay } from '../util';

export const StudyContainer = ({ countries, selectedFilter, searchQuery }) => {

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
        {countryCards}
      </section>
      <img src={colormap} className="img-map"
      alt="map of africa with capital cities" />
    </div>
  )
}

export const mapStateToProps = state => ({
  countries: state.countries,
  selectedFilter: state.selectedFilter,
  searchQuery: state.searchQuery
})

export default connect(mapStateToProps, null)(StudyContainer);
