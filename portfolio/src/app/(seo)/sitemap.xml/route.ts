import { pageSEO } from '@/lib/actions/helpers';
import {
  createOgImagePage,
  domainURL,
  generateRandomPreviousDay,
} from '@/lib/utils/helpers';
import { NextResponse } from 'next/server';

const PAGES = [
  { title: 'Home', path: '' },
  { title: 'About', path: 'about' },
  { title: 'Links', path: 'links' },
  { title: 'Contact', path: 'contact' },
  { title: 'Projects', path: 'projects' },
  { title: 'Writings', path: 'writings' },
  { title: 'Archives', path: 'archives' },
  { title: 'Resume', path: 'resume' },
  { title: 'Newsletters', path: 'newsletters' },
];

// https://developers.google.com/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions

interface SitemapProps {
  host: string;
}

const generateSitemapXml = ({ host }: SitemapProps) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        >
  ${PAGES.map(({ path, title }) => {
    const pageSeo = pageSEO[title.toLowerCase()];
    const image = createOgImagePage({
      title: `${title} Page`,
      meta: [
        ...pageSeo?.keywords,
        'rockyesse',
        'web3',
        'quantum-computing',
      ].join(' • '),
    });
    return `
  <url>
    <loc>${host}${path}</loc>
    <lastmod>${generateRandomPreviousDay()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
    <meta name="title" content="${pageSeo?.title ?? title}" />
    <meta name="description" content="${pageSeo?.description}" />
    <image:image>
      <image:loc>${image}</image:loc>
      <image:title>${title}</image:title>
    </image:image>
  </url>
  `;
  }).join('')}
</urlset>`;
};

export const GET = async (_request: Request) => {
  const sitemap = generateSitemapXml({ host: domainURL() });

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
