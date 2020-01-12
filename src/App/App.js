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
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    fetchCountryData()
      .then(data => {
        let countries = cleanData(data);
        console.log(countries);
        this.setState({ isLoading: false });
        this.props.updateCountries(countries);
      }).catch(err => console.log(err))
  };

  render () {
    return (
      <main className="App">
        <header className="App-header">
          African <span role='img' aria-label='heart emoji' className='header-heart'>♥️</span> This App
        </header>
        {this.state.isLoading && <div className='div-giphy'><iframe src="https://giphy.com/embed/tkJsL5AIIsg7K" className="giphy-embed" allowFullScreen></iframe></div>}
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

// <p><a href="https://giphy.com/gifs/oc-basins-watershedsriver-tkJsL5AIIsg7K">via GIPHY</a></p>
// Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
