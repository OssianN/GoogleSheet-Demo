import React from 'react';
import '../styles/footer.scss';
import images from '../images/';
import { Link } from 'gatsby';

export default () => (
    <div className='footer'>
      <div className='phoneAndEmail'>
        <p>+46-8-566 367 00</p>
        <p>info@belsyningsbranschen.se</p>
      </div>
      <div className='button'>
        <Link to='/medlemskap/'>Bli medlem</Link>
      </div>
      <div className='button'>
        <Link to='/tips/'>Tipsa oss</Link>
      </div>
      <img src={images.fb}></img>
      <img src={images.youtube}></img>
    </div>
  )