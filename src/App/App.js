import React, { Component } from 'react';
import logo from '../logo.svg';
import colormap from '../images/africa-map-countries-capitals-color.jpg'
import './App.css';
import { fetchCountryData } from '../apiCalls.js';
import { cleanData } from '../util';

class App extends Component {

  componentDidMount() {
    fetchCountryData()
      .then(data => {
        let countries = cleanData(data);
        console.log(countries);
        // use action creator to update store
      })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={colormap} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
