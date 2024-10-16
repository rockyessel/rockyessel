import { getPublishedPosts } from '@/lib/actions/convex_/posts';
import { domainURL, generateRandomPreviousDay } from '@/lib/utils/helpers';
import { PostType } from '@/types';
import { NextResponse } from 'next/server';

function generateRssFeed(host: string | null, items: PostType[]): string {
  const feedUrl = `https://${host}/rss.xml`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RSS Feeds| Latest Content from Rocky Essel</title>
    <link>${domainURL()}</link>
    <description>The latest content from Rocky Essel</description>
    <language>en-us</language>
    <pubDate>${generateRandomPreviousDay()}</pubDate>
    <lastBuildDate>${generateRandomPreviousDay()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${domainURL(`/${item.slug}`)}</link>
      <guid isPermaLink="true">${domainURL(`/${item.slug}`)}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.publishedAt}</pubDate>
      <dc:creator>${escapeXml('Rocky Essel')}</dc:creator>
      <category>${escapeXml(item.category || 'General')}</category>
    </item>
    `
      )
      .join('')}
  </channel>
</rss>`;
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c: string) {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c; // Ensure that a valid string is always returned
    }
  });
}

export async function GET(_request: Request): Promise<NextResponse> {
  const posts = await getPublishedPosts();

  const rss = generateRssFeed(domainURL(), posts);

  return new NextResponse(rss, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
