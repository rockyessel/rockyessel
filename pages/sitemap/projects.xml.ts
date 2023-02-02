import { CommonPath } from '@/interface';
import { CommonPathProps } from '@/utils/query';
import { GetServerSideProps } from 'next';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const paths_projects: CommonPath[] = await CommonPathProps('portfolio');

  const fields_projects: ISitemapField[] = paths_projects?.map((path) => ({
    loc: `https://esselr.vercel.app/projects/${path?.slug?.current}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(context, fields_projects);
};

export default function ProjectsXML() {}