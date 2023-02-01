import React from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

