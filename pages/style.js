import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: #202020;
  width: 100%;
  height: 30rem;
  z-index: 1;
  margin: 2rem;
  color: white;
  img {
    position: relative;
    width: auto;
    height: 100%;
    transform: translate(0, 0);
    transition: transform 0.5s;
    &:hover {
      cursor: pointer;
      transform: translate(0, -1.2rem);
      transition: transform 0.5s;
    }
    &:hover ~ h2 {
      color: #ed1d24;
    }
  }
  h2 {
    position: relative;
    text-align: center;
  }
`;

export { Card };
