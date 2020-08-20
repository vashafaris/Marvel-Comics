import { useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { useComicContext } from '../src/contexts/ComicContext';
import Layout from '../src/components/Layout/Home';
import { Card } from './styles';
import { Row, Column } from '../src/components/grid';
import { SET_DATA } from '../src/utils/constant';

export default function Home() {
  const {
    state: { listComic },
    dispatch,
  } = useComicContext();

  const { isLoading, error, data } = useQuery('marvelData', () =>
    fetch(
      'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=focDate&limit=12&ts=1&apikey=e9f5bc4e40105a92cb4a5492caf62bac&hash=ee88c92513ded6080fd992459355b19b'
    ).then(async (res) => {
      const jsonRes = await res.json();
      dispatch({
        type: SET_DATA,
        payload: jsonRes.data.results,
      });
      return jsonRes;
    })
  );

  if (isLoading) {
    console.log('loading...');
  } else if (error) {
    console.log('error', error);
  } else {
    console.log('data', data.data.results);
  }

  return (
    <>
      <Layout>
        <Row>
          {!isLoading &&
            !error &&
            data.data.results.map((item) => {
              console.log('item', item);
              return (
                <Column lg={4} key={item.id}>
                  <Card>
                    <Link href='/comic/[id]' as={`/comic/${item.id}`}>
                      {item.images.length > 0 ? (
                        <img
                          src={
                            item.images[0].path +
                            '/portrait_incredible.' +
                            item.images[0].extension
                          }
                        />
                      ) : (
                        <img src='/assets/imgna.png' />
                      )}
                    </Link>
                    <h2>{item.title}</h2>
                  </Card>
                </Column>
              );
            })}
        </Row>
      </Layout>
    </>
  );
}
