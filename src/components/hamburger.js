import React, { useState } from 'react';
import '../styles/hamburger.scss';

const Hamburger = ({ showMobileNav, setShowMobileNav }) => {
  const [navToggleClass, setNavToggleClass] = useState('');

  const handleMobileNavToggle = () => {
    if (showMobileNav === '0') {
      setShowMobileNav('-400px');
      setNavToggleClass('')
    } else {
      setShowMobileNav('0');
      setNavToggleClass('open')
    }
  }

  return (
    <>
      <button className='hamburger' onClick={handleMobileNavToggle}>
        <div id='nav-icon2' className={navToggleClass}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </>
  );
}

export default Hamburger;
