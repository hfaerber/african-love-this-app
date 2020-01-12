import React, { Component } from 'react';
import './App.css';
import { fetchCountryData } from '../apiCalls.js';
import { cleanData } from '../util';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import StudyContainer from '../StudyContainer/StudyContainer';
import { Route } from 'react-router-dom';
import { updateCountries, updateError, updateLoadingStatus } from '../actions';
import { connect } from 'react-redux';

export class App extends Component {

  componentDidMount() {
    fetchCountryData()
      .then(data => {
        let countries = cleanData(data);
        console.log(countries);
        this.props.updateLoadingStatus(false);
        this.props.updateCountries(countries);
      }).catch(err => {
        this.props.updateLoadingStatus(false);
        this.props.updateError('Error loading study cards. Please refresh to try again.')
      })
  };

  render () {
    return (
      <main className="App">
        <header className="App-header">
          African <span role='img' aria-label='heart emoji' className='header-heart'>♥️</span> This App
        </header>
        <Route exact path='/' component={WelcomeForm} />
        <Route path='/study' component={StudyContainer} />
      </main>
    );
  };
};

export const mapDispatchToProps = dispatch => ({
  updateCountries: countries => dispatch(updateCountries(countries)),
  updateError: errorMessage => dispatch(updateError(errorMessage)),
  updateLoadingStatus: status => dispatch(updateLoadingStatus(status))
});

export default connect(null, mapDispatchToProps)(App);

// <p><a href="https://giphy.com/gifs/oc-basins-watershedsriver-tkJsL5AIIsg7K">via GIPHY</a></p>
// Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
