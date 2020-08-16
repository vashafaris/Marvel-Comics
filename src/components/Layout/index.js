import React from 'react';
import { Container, Logo, BackgroundImage } from './style';

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Logo src='/assets/MarvelLogo.png' />
        <BackgroundImage src='assets/bimg.png' />
        {children}
      </Container>
    </>
  );
};

export default Layout;
