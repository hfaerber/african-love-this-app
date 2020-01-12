import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => {
  return(
    <div className='div-invalid-route'>
      <h2 className='h2-invalid-route'>Wow. You really do need help with Geography.</h2>
      <h2 className='h2-not-found'>Page Not Found</h2>
      <h2 className='h2-invalid-route'>How did you even get here?</h2>
      <Link to ='/'>
        <button className='button-invalid'>Let's try again</button>
      </Link>
    </div>
  )
}

export default NoMatch;
