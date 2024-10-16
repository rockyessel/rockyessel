import { getPublishedPosts } from '@/lib/actions/convex_/posts';
import {
  createOgImage,
  domainURL,
  generateRandomPreviousDay,
} from '@/lib/utils/helpers';
import { NextResponse } from 'next/server';

// https://developers.google.com/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions

interface SitemapProps {
  host: string;
}

const generateSitemapXml = async ({ host }: SitemapProps) => {
  const posts = await getPublishedPosts();

  return `<?xml version="1.0" encoding="UTF-8"?><urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        >
  ${posts
    ?.map((post) => {
      console.log({ post });

      const image = createOgImage({
        title: post.title,
        meta: [...post?.tags?.slice(0, 3)].join(' • '),
      });

      console.log({ image });

      return `
  <url>
    <loc>https://${host}${post?.slug}</loc>
    <lastmod>${post?.updatedAt || generateRandomPreviousDay()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <meta name="title" content="${post?.title}" />
    <meta name="description" content="${post?.description}" />
    <image:image>
      <image:loc>${image}</image:loc>
      <image:title>${post?.title}</image:title>
    </image:image>
  </url>
  `;
    })
    .join('')}
</urlset>`;
};

export const GET = async (_request: Request) => {
  const sitemap = await generateSitemapXml({ host: domainURL() });

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
