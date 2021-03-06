import React from 'react';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';
import { NavBtn } from '../NavBtn/NavBtn';

export const NavBar = () => {
  return(
    <header className='nav-header'>
      <h2 className="App-header">African
        <span role='img' aria-label='heart emoji' className='header-heart'>♥️
        </span>
      This App</h2>
      <div className='div-nav-btns'>
        <Link to='/' className='button-nav'>Home</Link>
        <NavBtn text={'Study'} link={'/study'}/>
        <NavBtn text={'Quiz'} link={'/quiz'}/>
      </div>
    </header>
  )
}

export default NavBar;
