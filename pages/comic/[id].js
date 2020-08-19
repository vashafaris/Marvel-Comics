import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import Layout from '../../src/components/Layout/Comic';
import { Container, BackgroundImage } from './styles';
import { useComicContext } from '../../src/contexts/ComicContext';

export default function Comic() {
  const router = useRouter();
  const { id } = router.query;

  // const { isLoading, error, data } = useQuery('marvelData', () =>
  //   fetch(
  //     `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=e9f5bc4e40105a92cb4a5492caf62bac&hash=ee88c92513ded6080fd992459355b19b`
  //   ).then((res) => res.json())
  // );

  // if (isLoading) {
  //   console.log('loading...');
  // } else if (error) {
  //   console.log('error', error);
  // } else {
  //   console.log('data', data.data.results);
  // }

  const {
    state: { listComic },
  } = useComicContext();

  const comic = listComic.find((item) => item.id == id);
  console.log(comic);

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
                : null
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
