import React, { Component } from 'react';
import './QuizCard.css';
import PropTypes from 'prop-types';

export class QuizCard extends Component {
  constructor() {
    super();
      this.state = {
        answerClass: 'unanswered'
      }
  }

  checkAnswer = (event) => {
    if (event.target.name === this.props.capital) {
      this.setState({ answerClass: 'correct'})
    } else {
      this.setState({ answerClass: 'incorrect'})
    }
  };


  render() {
    let answeredCardStyling = this.state.answerClass;
    return(
      <div className={answeredCardStyling}>
      <h3 className='quiz-country-title'>Country Name:</h3>
      <h3 className='quiz-country'>{this.props.name}</h3>
      <button className='quiz-button' name={this.props.answers[0]}
        onClick={event => this.checkAnswer(event)}>{this.props.answers[0]}</button>
      <button className='quiz-button' name={this.props.answers[1]}
        onClick={event => this.checkAnswer(event)}>{this.props.answers[1]}</button>
      <p className='region-hint hide'>This country is in {this.props.region}.</p>
      </div>
    )
  }
}

export default QuizCard;

QuizCard.propTypes = {
  name: PropTypes.string,
  capital: PropTypes.string,
  region: PropTypes.string,
  answers: PropTypes.array
}
