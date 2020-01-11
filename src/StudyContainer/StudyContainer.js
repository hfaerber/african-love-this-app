import React from 'react';
import './StudyContainer.css';
import CountryCard from '../CountryCard/CountryCard';
import StudyForm from '../StudyForm/StudyForm';
import colormap from '../images/africa-map-countries-capitals-color.jpg'
import { connect } from 'react-redux';

export const StudyContainer = ({ countries, selectedFilter }) => {

  const filter = () => {
    if (selectedFilter === 'Still Learning') {
    return countries.filter(c => c.needsStudied)
  } else if (selectedFilter === 'Got It!') {
    return countries.filter(c => !c.needsStudied)
  } else {
    return countries
  }
}

  console.log('filter', filter());

  const countryCards = filter().map(country => {
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
      <img src={colormap} className="img-map"
        alt="map of africa with capital cities" />
      <section className='section-card-display'>
        <StudyForm />
        {countryCards}
      </section>
    </div>
  )
}

export const mapStateToProps = state => ({
  countries: state.countries,
  selectedFilter: state.selectedFilter
})

export default connect(mapStateToProps, null)(StudyContainer);

// display map and give button click fn to enlarge
// display <filter and search container> (stateful?)
