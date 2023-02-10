import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultMetaDataProps, MetaInfoTagsProps } from '@/interface';
import { defaultMetaData } from '@/utils/services';

const Header = (props: DefaultMetaDataProps) => {


  const router = useRouter();

  const canonicalUrl: string = (
    `https://esselr.vercel.app` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];


    const metaInfoTags: MetaInfoTagsProps[] = [
      // Default Meta Tags
      
    { name: 'author', content: `${props?.author_name}` },
    { name: 'keywords', content:  `${props?.keywords}` || defaultMetaData?.keywords},
    {name: 'description', content: props?.description || defaultMetaData.description },
      // OpenGraph Meta Tags
    { name: 'og:title', content: props?.title || defaultMetaData.title },
    { name: 'og:type',content: props?.type || defaultMetaData.type},
    { name: 'og:url', content: canonicalUrl || `https://esselr.vercel.app` },
    { name: 'og:description',content: props?.description || defaultMetaData.description},
    { name: 'og:site_name', content: 'Rocky Essel' },
    { name: 'og:published_time',content: props?.publishedAt || new Date().toISOString(),},
    { name: 'og:modified_time', content: props?.updatedAt || new Date().toISOString(),},
    // OG Images
    { name: 'og:image', content: props?.image || defaultMetaData.image },
    { name: 'og:image:type', content: `image/${props?.MIME}` },
    { name: 'og:image:alt', content: props?.alt },
    { name: 'og:image:width', content: '1280' },
    { name: 'og:image:height', content: '640' },
    // Twitter Meta Tags
    { name: 'twitter:card', content: `summary_large_image` },
    { name: 'twitter:title', content: props?.title || defaultMetaData.title },
    { name: 'twitter:description',content: props?.description || defaultMetaData.description},
    { name: 'twitter:image', content: props?.image || defaultMetaData.image },

  ];


  const name: string = `${props?.title || defaultMetaData.title} | ${
    props?.type || defaultMetaData.type
  }`;

  return (
    <React.Fragment>
      <Head>
        <title>{name}</title>
        {/* Meta Tags */}
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0' />
        <meta name='revisit-after' content='1 days' />
        <meta name='language' content='English' />
        <meta name='robots' content='index,follow' />
        <meta name='reply-to' content='essel_r@outlook.com' />
        <meta itemProp='name' content={props?.title || defaultMetaData.title} />
        <meta itemProp='description' content={props?.description || defaultMetaData.description} />
        <meta itemProp='image' content={props?.image || defaultMetaData.image} />
        <meta name='theme-color' content='#fff' />
        <meta name="yandex-verification" content="a7ad8e351e0f2b7b" />
        <meta name="google-site-verification" content="rg1eFF95LvARlKlqiee2pZLzbioaQGK2JNqlb2FygbI" />
        {/* Head Links */}
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-512x512.png' />
        <link rel='canonical' href={canonicalUrl} />
        {/* Display All Twitter & OpenGraph Meta Tags */}
        {metaInfoTags?.map(({name, content},index)=> (
        <meta key={index} name={name} content={content} />
        ))}
        </Head>
    </React.Fragment>
  );
};

export default Header;
