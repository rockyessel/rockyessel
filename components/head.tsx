import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultMetaDataProps, MetaInfoTagsProps } from '@/interface';

const Header = (props: DefaultMetaDataProps) => {
  const defaultMetaData: DefaultMetaDataProps = {
    description: `This homepage was created, and designed by Rocky Essel, a web developer. The projects/works here, showcase my skill and knowledge.`,
    title: `Homepage`,
    image: `/icon-512x512.png`,
    alt: '',
    keywords: '',
    type: `website`,
    publishedAt: '',
    updatedAt: '',
    author_name: '',
    MIME: 'png',
  };

    const router = useRouter();

    const canonicalUrl: string = (
      `https://localhost:3000` + (router.asPath === '/' ? '' : router.asPath)
    ).split('?')[0];


    const metaInfoTags: MetaInfoTagsProps[] = [
    { name: 'og:title', content: props?.title || defaultMetaData.title },
    { name: 'og:type',content: props?.type || defaultMetaData.type},
    { name: 'og:url', content: canonicalUrl || `https://localhost:3000` },
    { name: 'og:image', content: props?.image || defaultMetaData.image },
    { name: 'og:description',content: props?.description || defaultMetaData.description},
    { name: 'og:site_name', content: 'Rocky Essel' },
    { name: 'og:published_time',content: props?.publishedAt || new Date().toISOString(),},
    { name: 'og:modified_time', content: props?.updatedAt || new Date().toISOString(),},
    { name: 'og:image:width', content: '1280' },
    { name: 'og:image:alt', content: props?.alt },
    { name: 'og:image:height', content: '640' },
    { name: 'og:image:type', content: `image/${props?.MIME}` },
    { name: 'keywords', content: `${props?.keywords}` },
    { name: 'author', content: `${props?.author_name}` },
  ];


  const name: string = `${props?.title || defaultMetaData.title} | ${
    props?.type || defaultMetaData.type
  }`;

  return (
    <React.Fragment>
      <Head>
        <title>{name}</title>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0'
        />
        <meta name='revisit-after' content='1 days' />
        <meta name='language' content='English' />
        <meta name='robots' content='index,follow' />
        <meta name='reply-to' content='essel_r@outlook.com' />
        <meta
          name='description'
          content={props?.description || defaultMetaData.description}
        />
        <meta itemProp='name' content={props?.title || defaultMetaData.title} />
        <meta
          itemProp='description'
          content={props?.description || defaultMetaData.description}
        />
        <meta
          itemProp='image'
          content={props?.image || defaultMetaData.image}
        />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:description'
          content='You cant create a company in one day. And building the perfect website also takes time. Search Engine Optimisaion and Inbound Marketing needs attention every day. Then after a few weeks you will start seeing results.'
        />
        <meta name='twitter:title' content='The best day of my life' />
        <meta
          name='twitter:image'
          content='https://finlac-i-t-engineering-ltd.vercel.app/cctvall.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-512x512.png' />
        <link rel='canonical' href={canonicalUrl} />
        <meta name='theme-color' content='#fff' />
      </Head>
    </React.Fragment>
  );
};

export default Header;
