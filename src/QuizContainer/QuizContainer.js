import React, { Component } from 'react';
import './QuizContainer.css';
import { connect } from 'react-redux';
import { QuizCard } from '../QuizCard/QuizCard';
import { NavBar } from '../NavBar/NavBar';
import PropTypes from 'prop-types';


export class QuizContainer extends Component {
  constructor() {
    super();
    this.state = {
      shuffledCountries: []
    }
  }

  shuffleCountries(countries) {
    for (let i = countries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [countries[i], countries[j]] = [countries[j], countries[i]];
    }
    return countries
  };

  handleShuffle = () => {
    let deck =  this.shuffleCountries([...this.props.countries]).splice(0, 10);
    console.log('deck', deck);
    console.log('postsplit', this.props.countries);
    this.setState({ shuffledCountries: deck });
  };

  render() {

    const quizCards = this.state.shuffledCountries.map(country => {
      return (
        <QuizCard
        key={country.capital}
        name={country.name}
        capital={country.capital}
        region={country.subregion}
        />
      )
    });
    return (
      <>
      <NavBar />
      <button className='button-new-game'
        onClick={this.handleShuffle}>New Game</button>
      <div className='quiz-container'>
        {quizCards}
      </div>
      </>
    )
  }
}

export const mapStateToProps = state => ({
  countries: state.countries
})

export default connect(mapStateToProps, null)(QuizContainer);

QuizContainer.propTypes = {
  countries: PropTypes.array
}
