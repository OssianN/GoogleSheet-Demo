import React from 'react';
import { Link } from 'gatsby';

const bokning = props => {
  return (
    <div className='bokning twoColumn'>
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <Link to="/bokningsSida/"><div>Boka</div></Link>
      </div>
      <img className='bokningImg' src={props.img}></img>
    </div>
  )
}

export default bokning;