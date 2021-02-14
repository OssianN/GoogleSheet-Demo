import React from 'react';
import { Link } from 'gatsby';

const Bokning = props => {
  return (
    <div className='bokning twoColumn'>
      <div className='bokningText'>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <Link to="/bokningsSida/"><div>Boka</div></Link>
      </div>
      <img className='bokningImg' src={props.img} alt='bokning'></img>
    </div>
  )
}

export default Bokning;