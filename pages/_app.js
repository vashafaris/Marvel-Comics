import Head from 'next/head';

import GlobalStyle from '../src/styles/GlobalStyle';
import { ComicProvider } from '../src/contexts/ComicContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <link rel='icon' href='/marvelico.png' />
      </Head>
      <GlobalStyle />
      <ComicProvider>
        <Component {...pageProps} />
      </ComicProvider>
    </>
  );
}

export default MyApp;
