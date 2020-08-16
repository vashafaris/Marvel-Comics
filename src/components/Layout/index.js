import React from 'react';
import { Container, Logo, BackgroundImage, Header } from './style';

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header>
          <Logo src='/assets/MarvelLogo.png' />
          <h1>COMICS</h1>
        </Header>
        <BackgroundImage src='assets/bimg.png' />
        {children}
      </Container>
    </>
  );
};

export default Layout;
