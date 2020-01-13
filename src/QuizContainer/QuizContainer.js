import React, { Component } from 'react';
import './QuizContainer.css';
import { connect } from 'react-redux';


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
  }

  handleShuffle = () => {
    let deck =  this.shuffleCountries([...this.props.countries]).splice(0, 15);
    console.log('deck', deck);
    console.log('postsplit', this.props.countries);
    this.setState({ shuffledCountries: deck });
  }

//



  render() {
    return (
      <button onClick={this.handleShuffle}>shuffle</button>
    )
  }
}

export const mapStateToProps = state => ({
    countries: state.countries
})

export default connect(mapStateToProps, null)(QuizContainer);
