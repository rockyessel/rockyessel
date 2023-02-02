import React from 'react';
import { Head } from './index';
import { LayoutProps } from '@/interface';
import Script from 'next/script';

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Head
        description={props?.description}
        title={props?.title}
        image={props?.image}
        type={props?.type}
        alt={props?.alt}
        keywords={'portfolio website,blog,website,projects'}
        publishedAt={props?.publishedAt}
        updatedAt={props?.updatedAt}
        MIME={props?.MIME}
        author_name={props?.author_name}
      />
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
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
