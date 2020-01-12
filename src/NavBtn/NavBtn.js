import React from 'react';
import { Link } from 'react-router-dom';
import './NavBtn.css';
import { updateUser } from '../actions';
import { connect } from 'react-redux';

export const NavBtn = ({ text, link }) => {
  return(
    <Link to={link}>
      <button type='button' className='button-nav' id={text}>
        {text}
      </button>
    </Link>
  )
}

export default NavBtn;
