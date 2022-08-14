import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '@fontsource/inter';
import '@fontsource/rubik-glitch';

import '../styles/globals.css';

import defaultSeoConfig from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
