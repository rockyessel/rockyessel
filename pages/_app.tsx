import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Navbar />
      <div className='w-full h-full'>
        <section className='bg-orange-200 h-[20rem] w-full'></section>
        <section className='bg-orange-300 w-full h-full flex justify-center'>
          <Component {...pageProps} />
        </section>
      </div>
    </React.Fragment>
  );
}
//
