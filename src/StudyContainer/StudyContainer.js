import React from 'react';
import './StudyContainer.css';
// import CountryCard from '../CountryCard';
import colormap from '../images/africa-map-countries-capitals-color.jpg'


const StudyContainer = () => {
  return (
    <div className='div-map-image'>
      <img src={colormap} className="img-map"
        alt="map of africa with capital cities" />

    </div>
  )
}

export default StudyContainer;

// display map and give button click fn to enlarge
// create and display <country cards/>
// display <filter and search container> (stateful?)
