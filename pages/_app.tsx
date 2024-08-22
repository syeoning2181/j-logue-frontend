import type { AppProps } from "next/app";
import Head from "next/head";

import { createGlobalStyle } from "styled-components";

import "@/assets/styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    overscroll-behavior-y: contain;
  }
`;
