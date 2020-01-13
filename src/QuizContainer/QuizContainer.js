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
    let deckstart =  this.shuffleCountries([...this.props.countries]).splice(0, 10);
    let deck = deckstart.map((country, index) => {
      let fake = [...deckstart];
      let indexOf = fake.findIndex(c => c === country)
      let incorrect = indexOf === 0 ? fake[fake.length - 1].capital : fake[index - 1].capital
      return { name: country.name,
               capital: country.capital,
               subregion: country.subregion,
               incorrectCapital: incorrect
             }
    });
    this.setState({ shuffledCountries: deck });
  };





  render() {

    const quizCards = this.state.shuffledCountries.map(country => {
      let answers = [country.capital, country.incorrectCapital];
      this.shuffleCountries(answers);
      return (
        <QuizCard
        key={country.capital}
        name={country.name}
        capital={country.capital}
        region={country.subregion}
        answers={answers}
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
