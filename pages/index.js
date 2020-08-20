import { useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import fetch from 'node-fetch';
import ErrorPage from 'next/error';
import styled from 'styled-components';

import { useComicContext } from '../src/contexts/ComicContext';
import Layout from '../src/components/Layout/Home';
import { Row, Column } from '../src/components/Grid';
import { SET_DATA } from '../src/utils/constant';

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

export default function Home({ data }) {
  const { dispatch } = useComicContext();

  useEffect(() => {
    try {
      dispatch({
        type: SET_DATA,
        payload: data.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  // const { isLoading, error, data } = useQuery('marvelData', () =>
  //   fetch(
  //     'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=focDate&limit=12&ts=1&apikey=e9f5bc4e40105a92cb4a5492caf62bac&hash=ee88c92513ded6080fd992459355b19b'
  //   ).then(async (res) => {
  //     const jsonRes = await res.json();
  // dispatch({
  //   type: SET_DATA,
  //   payload: jsonRes.data.results,
  // });
  //     return jsonRes;
  //   })
  // );

  // if (isLoading) {
  //   console.log('loading...');
  // } else if (error) {
  //   console.log('error', error);
  // } else {
  //   console.log('data', data.data.results);
  // }

  if (!data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Layout>
        <Row>
          {data.data.results.map((item) => {
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

export const getServerSideProps = async ({ res }) => {
  try {
    const response = await fetch(
      'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=focDate&limit=12&ts=1&apikey=e9f5bc4e40105a92cb4a5492caf62bac&hash=ee88c92513ded6080fd992459355b19b'
    );
    const data = await response.json();
    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
