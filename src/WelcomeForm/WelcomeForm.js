import React, { Component } from 'react';
import './WelcomeForm.css';
import NavBtn from '../NavBtn/NavBtn';
import { updateUser } from '../actions';
import { connect } from 'react-redux';

export class WelcomeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
    this.props.updateUser(event.target.value);
  }

  render() {
    return(
      <div>
        <h2 className='welcome'>Welcome!</h2>
        <h3>This is <span className='app-title'>African ♥ This App</span></h3>
        <input type='text' className='input-name' placeholder='Enter your name'
          name='name' value={this.state.name} onChange={(event) =>
            this.handleChange(event)} />
        <div className='div-welcome-page-buttons'>
          <NavBtn
            text='Study'
            link='/study'
          />
          <NavBtn
            text='Quiz'
            link='/quiz'
          />
        </div>
        <div className='div-welcome-info'>
        <section className='section-radio'>
          <h4 className='title-welcome-info'>Why are you here {this.state.name ?
            `${this.state.name}` : ''}?</h4>
            <input type='radio' id='bored' className='button-radio'/>
            <label forhtml='bored' className='label-radio'>
            Bored
          </label>

            <input type='radio' id='egypt' className='button-radio'/>
            <label forhtml='egypt' className='label-radio'>
            Found out Egypt was in Africa and it blew my mind
          </label>

            <input type='radio' id='learn' className='button-radio'/>
            <label forhtml='learn' className='label-radio'>
            In college and wishing I could learn something I actually want to
              learn instead of my gen eds
          </label>
            <input type='radio' id='shame' className='button-radio'/>
            <label forhtml='shame' className='label-radio'>
            Deeply ashamed of my lack of knowledge around World Geography and
              ready to change that
          </label>
        </section>
        <section className='section-instructions'>
          <h4 className='title-welcome-info'>What can you do here?</h4>
          <ul className='list-instructions'>
            <li>Study the map of Africa to learn country names and capital cities</li>
            <li>Study and track learning with study cards for each country (with
            capital city and region)</li>
            <li>Search for a specific country card by country name</li>
            <li>Once a country and it's capital is commited to memory, click the
            'Got It!' button to mark it as learned.</li>
            <li>Card status will reset upon any refresh to force you to practice -
            even the ones you've learned!</li>
            <li>Filter by 'Still Learning' cards, 'Got It' cards, or all cards</li>
          </ul>
        </section>
        </div>

      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
})

export default connect(null, mapDispatchToProps)(WelcomeForm);
