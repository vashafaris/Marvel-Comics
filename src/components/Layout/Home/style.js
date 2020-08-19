import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 0 4rem 0;
  background-color: #202020;
  color: white;
  z-index: -2;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-left: 1rem;
    font-size: 5rem;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 7rem;
  @media only screen and (max-width: 768px) {
    height: 72px;
  }
`;

const BackgroundImage = styled.img`
  width: auto;
  height: 50rem;
  position: fixed;
  top: -4rem;
  right: -7rem;
  /* z-index: -1; */
  filter: opacity(0.5);
`;

export { Container, Header, Logo, BackgroundImage };
