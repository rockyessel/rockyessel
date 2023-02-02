import { CommonPath } from '@/interface';
import { CommonPathProps } from '@/utils/query';
import { GetServerSideProps } from 'next';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const paths_thoughts: CommonPath[] = await CommonPathProps('thought');

  const fields_thoughts: ISitemapField[] = paths_thoughts?.map((path) => ({
    loc: `https://esselr.vercel.app/thoughts/${path?.slug?.current}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(context, fields_thoughts);
};

export default function ThoughtsXML() {}
