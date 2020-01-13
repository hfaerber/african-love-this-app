import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBtn.css';

export const NavBtn = ({ text, link }) => {
  return(
    <NavLink to={link} className='button-nav'>
        {text}
    </NavLink>
  )
}

export default NavBtn;
