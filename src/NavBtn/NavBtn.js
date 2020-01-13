import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBtn.css';
import { updateUser } from '../actions';
import { connect } from 'react-redux';

export const NavBtn = ({ text, link }) => {
  return(
    <NavLink to={link}>
      <button type='button' className='button-nav' id={text}>
        {text}
      </button>
    </NavLink>
  )
}

export default NavBtn;
