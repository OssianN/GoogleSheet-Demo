import React from 'react';
import { Link } from 'gatsby';
import '../styles/nav.scss';

const Nav = props => {
  return (
    <nav className='nav' style={{marginRight: props.showMobileNav}}>
      <ul className=''>
        <li className=''>
          <Link to="/">Hem</Link>
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
