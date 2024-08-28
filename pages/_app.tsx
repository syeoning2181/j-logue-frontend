import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

import '@/assets/styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>J-logue</title>

        <meta key="metaTitle" name="title" content="J-logue" />
        <meta key="og:title" property="og:title" content="J-logue" />

        <link rel="icon" href="/images/favicon.png" type="image/png" sizes="32x32" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    overscroll-behavior-y: contain;
  }
`;
