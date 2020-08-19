import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 40rem;
  flex: 1;
  position: relative;
  padding: 4rem;
  padding-left: 10%;

  img {
    position: relative;
    height: 100%;
    width: auto;
    margin-right: 4rem;
    z-index: 2;
    filter: none;
  }

  .column {
    display: block;
    flex-direction: column;
    flex: 0.5;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    white-space: nowrap;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 3.2rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-bottom: 2rem;
    font-weight: 400;
  }

  .creator {
    margin-right: 1rem;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(2rem) opacity(20%);
  background-image: ${({ backgroundImg }) =>
    backgroundImg
      ? `url(${backgroundImg})`
      : `url(http://i.annihil.us/u/prod/marvel/i/mg/6/60/5c9a409b239f0.jpg)`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export { Container, BackgroundImage };
