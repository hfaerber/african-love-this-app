import React, { Component } from 'react';
import './WelcomeForm.css';
import NavBtn from '../NavBtn/NavBtn';

class WelcomeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return(
      <div>
        <h2 className='welcome'>Welcome!</h2>
        <h3>This is <span className='app-title'>African ♥ This App</span></h3>
        <input type='text' className='input-name' placeholder='Enter your name'
          name='name' value={this.state.name} onChange={(event) => this.handleChange(event)} />
        <h4 className='why-here'>Why are you here {this.state.name ? `${this.state.name}` : ''}?</h4>
        <div className='div-radio'>
          <label forhtml='bored' className='label-radio'>
            <input type='radio' id='bored' className='button-radio'/>
            Bored
          </label>
          <label forhtml='egypt' className='label-radio'>
            <input type='radio' id='egypt' className='button-radio'/>
            Found out Egypt was in Africa and it blew my mind
          </label>
          <label forhtml='learn' className='label-radio'>
            <input type='radio' id='learn' className='button-radio'/>
            In college and wishing I could learn something I actually want to learn instead of my gen eds
          </label>
          <label forhtml='shame' className='label-radio'>
            <input type='radio' id='shame' className='button-radio'/>
            Deeply ashamed of my lack of knowledge around World Geography and ready to change that
          </label>
        </div>
        <NavBtn
          text='Study'
          link='/study'
          user={this.state.name}
        />
        <NavBtn
          text='Quiz'
          link='/quiz'
          user={this.state.name}
        />
      </div>
    )
  }
}

export default WelcomeForm;

// within return i will render my NavBtn components once it is built and add onclick which navigates where you go
// and updates the redux store with the user name
