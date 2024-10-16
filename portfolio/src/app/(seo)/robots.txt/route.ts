import { domainURL } from '@/lib/utils/helpers';
import { NextResponse } from 'next/server';

export const GET = async (_request: Request) => {
  let robotsTxt = `  
Sitemap: ${domainURL(`/sitemap.xml`)}
Sitemap: ${domainURL(`/postsitemap.xml`)}

User-agent: *
Allow: /
Disallow: /api/
Disallow: /dashboard/
`;

  return new NextResponse(robotsTxt, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
