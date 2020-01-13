import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';
import NavBar from '../NavBar/NavBar';


const NoMatch = () => {
  return(
    <>
      <NavBar />
      <div className='div-invalid-route'>
        <h2 className='h2-invalid-route'>Wow. You really do need help with Geography.</h2>
        <h2 className='h2-not-found'>Page Not Found</h2>
        <h2 className='h2-invalid-route'>How did you even get here?</h2>
      </div>
    </>
  )
}

export default NoMatch;
