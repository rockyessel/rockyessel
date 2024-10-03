import { NextResponse } from 'next/server';

function generateSitemapXml(host: string, urls: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>https://${host}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
    )
    .join('')}
</urlset>`;
}

export async function GET(request: Request) {
  const host = request.headers.get('host');

  // Define your URLs here. In a real application, you might fetch these from a database or API
  let urls = ['/'];

  if (host?.startsWith('blog.')) {
    urls = urls.concat(['/posts', '/about', '/contact']);
  } else if (host?.startsWith('shop.')) {
    urls = urls.concat(['/products', '/categories', '/cart']);
  }

  // You might want to add dynamic URLs here, e.g., from a database
  // const dynamicUrls = await fetchDynamicUrlsFromDatabase();
  // urls = urls.concat(dynamicUrls);

  const sitemap = generateSitemapXml(host!, urls);

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
