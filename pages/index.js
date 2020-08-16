import Head from 'next/head';
import { useQuery } from 'react-query';

import Layout from '../src/components/Layout';
import GlobalStyle from '../src/styles/GlobalStyle';
import { Card } from './style';
import { Row, Column } from '../src/components/grid';
import { useEffect } from 'react';

export default function Home() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(
      'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=focDate&limit=12&ts=1&apikey=e9f5bc4e40105a92cb4a5492caf62bac&hash=ee88c92513ded6080fd992459355b19b'
    ).then((res) => res.json())
  );

  if (isLoading) {
    console.log('loading...');
  } else if (error) {
    console.log('error', error);
  } else {
    console.log('data', data);
  }

  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <link rel='icon' href='/marvelico.png' />
      </Head>
      <Layout>
        <Row>
          {!isLoading &&
            data.data.results.map((item) => {
              return (
                <Column lg={4} key={item.id}>
                  <Card>
                    {item.images.length > 0 ? (
                      <img
                        src={
                          item.images[0].path +
                          '/portrait_incredible.' +
                          item.images[0].extension
                        }
                      />
                    ) : (
                      <img src='/assets/imgnf.png' />
                    )}

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
