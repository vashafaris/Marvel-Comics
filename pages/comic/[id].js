import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import Layout from '../../src/components/Layout/Comic';
import { Container, BackgroundImage } from './styles';
import { useComicContext } from '../../src/contexts/ComicContext';

export default function Comic() {
  const router = useRouter();
  const { id } = router.query;

  const {
    state: { listComic },
  } = useComicContext();

  const comic = listComic.find((item) => item.id == id);

  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <link rel='icon' href='/marvelico.png' />
      </Head>
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
