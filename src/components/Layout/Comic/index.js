import Link from 'next/link';

import { Container, Header, Logo } from './style';

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Link href='/'>
          <Header>
            <Logo src='/assets/MarvelLogo.png' />
            <h1>COMICS</h1>
          </Header>
        </Link>
        {children}
      </Container>
    </>
  );
};

export default Layout;
