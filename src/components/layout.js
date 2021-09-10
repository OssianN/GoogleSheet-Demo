import React from 'react';
import Container from './container';

const Template = ({ children }) => {

    return (
      <>
      <Container>
        {children}
      </Container>
      </>
    )
  }

export default Template
