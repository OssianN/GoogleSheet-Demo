import React from 'react';
import '../styles/hero.scss';

export default props => {
  return (
    <div className='hero'>
      <img
        className='heroImg'
        alt={props.title}
        src={props.src}
      />
      <div className='heroText'>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
