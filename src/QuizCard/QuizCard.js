import React, { Component } from 'react';
import './QuizCard.css';

export class QuizCard extends Component {
  constructor() {
    super();
      this.state = {
        capital: ''
      }
  }


  render() {
    const {name, capital, region} = this.props;
    return(
      <div className='quiz-card'>
      <h3 className='quiz-country'>Country Name:</h3>
      <h3 className='quiz-country'>{name}</h3>
      <input type='text' name={capital} placeholder='Enter Capital'
        value={this.state.capital} className='quiz-guess-input'
        onChange={event => this.setState({ capital: event.target.value })} />
      <p className='spelling-counts'>Careful, spelling counts!</p>
      <button className='quiz-button-check'>Check Answer</button>

      <p className='region-hint hide'>This country is in {region}.</p>
      </div>
    )
  }



}




export default QuizCard;
