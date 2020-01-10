import React from 'react';
import './StudyContainer.css';
import CountryCard from '../CountryCard/CountryCard';
import colormap from '../images/africa-map-countries-capitals-color.jpg'
import { connect } from 'react-redux';

const StudyContainer = ({ countries }) => {

  const countryCards = countries.map(country => {
      return(<CountryCard
        key={country.name}
        name={country.name}
        capital={country.capital}
        region={country.subregion}
      />)
    })

  return (
    <div className='div-map-image'>
      <img src={colormap} className="img-map"
        alt="map of africa with capital cities" />
      <section className='section-card-display'>
        {countryCards}
      </section>
    </div>
  )
}

export const mapStateToProps = state => ({
  countries: state.countries
})

export default connect(mapStateToProps, null)(StudyContainer);

// display map and give button click fn to enlarge
// create and display <country cards/>
// display <filter and search container> (stateful?)
