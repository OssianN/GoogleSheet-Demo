import React, { useState } from 'react';
import Container from './container';
import Nav from './nav';
import Hamburger from './hamburger';
import Footer from './footer';

const Template = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState('-400px');

    return (
      <>
      <Container>
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
