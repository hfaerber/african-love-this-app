import React from 'react';
import './StudyContainer.css';
import CountryCard from '../CountryCard/CountryCard';
import StudyForm from '../StudyForm/StudyForm';
import colormap from '../images/africa-map-countries-capitals-color.jpg'
import { connect } from 'react-redux';

export const StudyContainer = ({ countries, selectedFilter }) => {
  let query = 'Angola';
  // could move filter to UTIL if passing props as args works

  const getQueryCard = countries.reduce((acc, c) => {
    if (c.name.toLowerCase().includes(query.toLowerCase())) {
      acc.push(c)
    }
    return acc
  }, [])

  console.log('query', getQueryCard)

  const filter = (countries, selectedFilter) => {
    return selectedFilter === 'Still Learning' ?
      countries.filter(c => c.needsStudied)
      : selectedFilter === 'Got It!' ? countries.filter(c => !c.needsStudied)
      : countries
  }

  console.log('filter', filter(countries, selectedFilter));

  let countriesToDisplay = getQueryCard ? getQueryCard
      : filter(countries, selectedFilter);

  const countryCards =
    countriesToDisplay.map(country => {
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
