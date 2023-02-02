import React from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components';
import NextNProgress from 'nextjs-progressbar';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-JK0DEBR011'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
       
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JK0DEBR011');

        `}
      </Script>
      <Navbar />
      <NextNProgress color={'#d1d5db'} />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

