import React from 'react';
import '../styles/footer.scss';
import images from '../images/';
import { Link } from 'gatsby';

const Footer = () => (
    <div className='footer'>
      <div className='phoneAndEmail'>
        <p>+46-8-566 367 00</p>
        <p>info@belysningsbranschen.se</p>
      </div>
      <div className='button'>
        <Link to='/medlemskap/'>Bli medlem</Link>
      </div>
      <div className='button'>
        <Link to='/tips/'>Tipsa oss</Link>
      </div>
      <div className='socialMedia'>
        <img src={images.fb} alt='Facebook'></img>
        <img src={images.youtube} alt='YouTube'></img>
      </div>
    </div>
  )

  export default Footer;