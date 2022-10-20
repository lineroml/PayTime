import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PayTime</title>
        <link rel='icon' href='/logo.png' />
        <script src='https://kit.fontawesome.com/11b910f859.js' crossOrigin='anonymous'></script>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
