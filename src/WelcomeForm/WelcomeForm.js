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
        <h1>Welcome!</h1>
        <h2>This is <span className='app-title'>African ♥ This App</span></h2>
        <input type='text' className='input-name' placeholder='Enter your name'
          name='name' value={this.state.name} onChange={(event) => this.handleChange(event)} />
        <p>Why are you here {this.state.name ? `${this.state.name}` : ''}?</p>
        <div className='div-radio'>
          <label forhtml='bored' className='button-radio'>
            <input type='radio' id='bored'/>
            Bored
          </label>
          <label forhtml='egypt' className='button-radio'>
            <input type='radio' id='egypt'/>
            Found out Egypt was in Africa and it blew my mind
          </label>
          <label forhtml='learn' className='button-radio'>
            <input type='radio' id='learn'/>
            In college and wishing I could learn something I actually want to learn instead of my gen eds
          </label>
          <label forhtml='shame' className='button-radio'>
            <input type='radio' id='shame'/>
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
