import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Get the host from the request
  const host = request.headers.get("host");

  // Generate robots.txt content based on the subdomain
  let robotsTxt = "";

  if (host?.startsWith("blog.")) {
    robotsTxt = `
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://${host}/sitemap.xml
`;
  } else if (host?.startsWith("admin.")) {
    robotsTxt = `
User-agent: *
Disallow: /
`;
  } else {
    robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://${host}/sitemap.xml
`;
  }

  // Return the robots.txt content
  return new NextResponse(robotsTxt, {
    headers: { "Content-Type": "text/plain" },
  });
}
