import React from 'react';
import { Link } from 'react-router-dom';
import './NavBtn.css';
import { updateUser } from '../actions';
import { connect } from 'react-redux';

export const NavBtn = ({ text, link, user }) => {
  return(
    <Link to={link}>
      <button className='button-nav' id={text} onClick={(user) => updateUser(user)}>
        {text}
      </button>
    </Link>
  )
}

export const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
})

export default connect(null, mapDispatchToProps)(NavBtn);
