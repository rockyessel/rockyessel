import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
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

        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8465998295989177'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <body className='bg-[#0e141b] text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
