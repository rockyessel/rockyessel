import React from 'react';
import fs from 'fs';
import { CommonPathProps } from '@/utils/query';
import { CommonPath } from '@/interface';

const Sitemap = () => {};
export const getServerSideProps = async ({ res }: { res: any }) => {
  // Path from Sanity.io
  const paths_projects: CommonPath[] = await CommonPathProps('portfolio');
  const paths_thoughts: CommonPath[] = await CommonPathProps('thought');

  const baseUrl = `https://esselr.vercel.app`;

  //   Static Pages Dir
  const staticPages = fs
    .readdirSync('./')
    .filter((staticPage) => {
      return ![
        '_app.tsx',
        '___vc',
        'node_modules',
        '404.tsx',
        '.next',
        '___next_launcher.cjs',
        'package.json',
        'index.tsx',
        'api.tsx',
        'projects',
        'thoughts',
        '_document.tsx',
        '_error.tsx',
        'sitemap.xml.tsx',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const dynamic_thoughts = paths_thoughts?.map((path) => {
    return `
          <url>
              <loc>${baseUrl}/thoughts/${path?.slug?.current}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
        `;
  });

  const dynamic_projects = paths_projects?.map((path) => {
    return `
          <url>
              <loc>${baseUrl}/projects/${path?.slug?.current}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
        `;
  });

  console.log('sitemap', staticPages);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
        ${dynamic_thoughts}
        ${dynamic_projects}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
