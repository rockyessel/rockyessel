import React from 'react';
import fs from 'fs';
import { CommonPathProps } from '@/utils/query';
import { CommonPath } from '@/interface';

const Sitemap = () => {};
export const getServerSideProps = async ({ res }: { res: any }) => {
  // Path from Sanity.io
  const paths_projects: CommonPath[] = await CommonPathProps('portfolio');
  const paths_thoughts: CommonPath[] = await CommonPathProps('thought');

  //   Static Pages Dir
  const staticPages = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        '_app.tsx',
        '404.tsx',
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
      return `http://localhost:3000/${staticPagePath}`;
    });

  const dynamic_thoughts = paths_thoughts?.map((path) => {
    return `
          <url>
              <loc>http://localhost:3000/thoughts/${path?.slug?.current}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
        `;
  });

  const dynamic_projects = paths_projects?.map((path) => {
    return `
          <url>
              <loc>http://localhost:3000/thoughts/${path?.slug?.current}</loc>
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
