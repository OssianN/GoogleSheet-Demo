import React, { useState } from 'react';
import Container from './Container';
import Nav from './nav';
import Hamburger from './hamburger';

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
      </Container>
      </>
    )
  }

export default Template
