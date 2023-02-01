import React from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Navbar />
      <NextNProgress color={'#d1d5db'} />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

