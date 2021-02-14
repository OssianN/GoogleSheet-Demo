import React, { useState } from 'react';
import Container from './container';
import Nav from './nav';
import { Link } from 'gatsby';
import Hamburger from './hamburger';
import images from '../images';
import Footer from './footer';

const Template = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState('-400px');

    return (
      <>
      <Container>
        <div className="mobileNav"></div>
        <Link to='/'><img src={images.logo} alt='logo' className='logo'></img></Link>
        <Hamburger
          showMobileNav={showMobileNav}
          setShowMobileNav={setShowMobileNav}
        />
        <Nav
          showMobileNav={showMobileNav}
        />
        {children}
        <Footer />
      </Container>
      </>
    )
  }

export default Template
