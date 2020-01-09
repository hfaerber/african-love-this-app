import React from 'react';
import { Link } from 'react-router-dom';
import './NavBtn.css';

const NavBtn = ({ text, link }) => {
  return(
    <Link to={link}>
      <button className='button-nav' id={text}>
        {text}
      </button>
    </Link>
  )
}

export default NavBtn;
