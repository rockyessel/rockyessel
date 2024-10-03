import { NextResponse } from "next/server";

// Define types for the RSS feed items
interface RssItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

function generateRssFeed(host: string | null, items: RssItem[]): string {
  const feedUrl = `https://${host}/rss.xml`;
  const siteUrl = `https://${host}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>My Amazing Blog</title>
    <link>${siteUrl}</link>
    <description>The latest content from My Amazing Blog</description>
    <language>en-us</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${siteUrl}${item.link}</link>
      <guid isPermaLink="true">${siteUrl}${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${new Date(item.pubDate).toUTCString()}</pubDate>
    </item>
    `
      )
      .join("")}
  </channel>
</rss>`;
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c: string) {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c; // Ensure that a valid string is always returned
    }
  });
}

export async function GET(request: Request): Promise<NextResponse> {
  const host = request.headers.get("host");

  // In a real application, you would fetch these items from a database or API
  const items: RssItem[] = [
    {
      title: "First Blog Post",
      link: "/blog/first-post",
      description: "This is my first blog post.",
      pubDate: "2024-09-29T12:00:00Z",
    },
    {
      title: "Second Blog Post",
      link: "/blog/second-post",
      description: "This is my second blog post.",
      pubDate: "2024-09-30T12:00:00Z",
    },
    // Add more items as needed
  ];

  const rss = generateRssFeed(host, items);

  return new NextResponse(rss, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
