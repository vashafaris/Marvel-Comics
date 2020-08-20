import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ErrorPage from 'next/error';

import Layout from '../../src/components/Layout/Comic';
import { useComicContext } from '../../src/contexts/ComicContext';

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

export default function Comic() {
  const router = useRouter();
  const { id } = router.query;

  const {
    state: { listComic },
  } = useComicContext();

  const [comic, setComic] = useState({
    title: '',
    images: [],
    characters: {
      items: [],
    },
    description: '',
    creators: {
      items: [],
    },
  });

  useEffect(() => {
    setComic(listComic.find((item) => item.id == id));
  }, []);

  if (!comic) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Layout>
        <Container>
          <BackgroundImage
            backgroundImg={
              comic.images[0]
                ? comic.images[0].path + '.' + comic.images[0].extension
                : null
            }
          />
          <img
            src={
              comic.images[0]
                ? comic.images[0].path + '.' + comic.images[0].extension
                : '/assets/imgna.png'
            }
          />
          <div className='column'>
            <h1>{comic.title}</h1>
            <h2>Pubslihed:</h2>
            <h3>{new Date('1994-08-01T00:00:00-0400').toLocaleDateString()}</h3>

            {comic.creators.items.length > 0 && (
              <>
                <h2>Creator:</h2>
                <div className='row'>
                  {comic.creators.items.map((item) => (
                    <h3 className='creator'>{item.name}</h3>
                  ))}
                </div>
              </>
            )}

            {comic.characters.items.length > 0 && (
              <>
                <h2>Character:</h2>
                {comic.characters.items.map((item) => (
                  <h3 className='creator'>{item.name}</h3>
                ))}
              </>
            )}

            <p>{comic.description}</p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
