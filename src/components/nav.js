import React from 'react';
import { Link } from 'gatsby';
import '../styles/nav.scss';

const Nav = props => {
  return (
    <nav className='nav' style={{marginRight: props.showMobileNav}}>
      <ul className=''>
        <li className=''>
          <Link to="/">Home</Link>
        </li>
        <li className=''>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
