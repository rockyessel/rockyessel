import React from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider attribute='class'>
        <Navbar />
        <NextNProgress color={'#ff5277'} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
