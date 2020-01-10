import React, { Component } from 'react';
import logo from '../logo.svg';
import colormap from '../images/africa-map-countries-capitals-color.jpg'
import './App.css';
import { fetchCountryData } from '../apiCalls.js';
import { cleanData } from '../util';
import WelcomeForm from '../WelcomeForm/WelcomeForm';

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
      <main className="App">
        <header className="App-header">
          African ♥️ This App
        </header>
        <WelcomeForm/>
      </main>
    );
  }
}

export default App;
// <img src={colormap} className="App-logo" alt="logo" />
