/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-JK0DEBR011'
        />
        <script>
          {`
       
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JK0DEBR011');

        `}
        </script>

        {/* Google Adsense */}
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8465998295989177'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <body className='bg-[#0e141b] text-white font-moldyen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
