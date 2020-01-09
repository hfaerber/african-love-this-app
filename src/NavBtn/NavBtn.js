import React from 'react';
import './NavBtn.css';

const NavBtn = ({ text, link }) => {
  return(
    <button className='button-nav' id={text}>
      {text}
    </button>
  )
}

export default NavBtn;
