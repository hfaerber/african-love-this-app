import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBtn.css';
import PropTypes from 'prop-types';

export const NavBtn = ({ text, link }) => {
  return(
    <NavLink to={link} className='button-nav'>
        {text}
    </NavLink>
  )
}

export default NavBtn;

NavBtn.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
}
