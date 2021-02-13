import React from 'react';
import { Link } from 'gatsby';
import images from '../images';
import '../styles/nav.scss';

const Nav = props => {
  return (
    <nav className='nav' style={{marginRight: props.showMobileNav}}>
      <img src={images.logo} alt='logo'></img>
      <ul className=''>
        <li className=''>
          <Link to="/">Home</Link>
        </li>
        <li className=''>
          <Link to="/medlemskap/">Medlemskap</Link>
        </li>
        <li className=''>
          <Link to="/aktuellt/">Aktuellt</Link>
        </li>
        <li className='disable'>
          <Link to="/about/">Om oss</Link>
        </li>
        <li className='disable'>
          <Link to="/about/">Verksamhet</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
