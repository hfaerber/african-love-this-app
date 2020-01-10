import React, { Component } from 'react';
import './App.css';
import { fetchCountryData } from '../apiCalls.js';
import { cleanData } from '../util';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import StudyContainer from '../StudyContainer/StudyContainer';
import { Route } from 'react-router-dom';
import { updateCountries } from '../actions';
import { connect } from 'react-redux';

export class App extends Component {

  componentDidMount() {
    fetchCountryData()
      .then(data => {
        let countries = cleanData(data);
        console.log(countries);
        this.props.updateCountries(countries);
      }).catch(err => console.log(err))
  };

  render () {
    return (
      <main className="App">
        <header className="App-header">
          African <span role='img' aria-label='heart emoji'>♥️</span> This App
        </header>
        <Route exact path='/' component={WelcomeForm} />
        <Route path='/study' component={StudyContainer} />
      </main>
    );
  };
};

export const mapDispatchToProps = dispatch => ({
  updateCountries: countries => dispatch(updateCountries(countries))
});

export default connect(null, mapDispatchToProps)(App);
