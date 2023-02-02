const siteUrl = `https://esselr.vercel.app`;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/sitemap/thoughts.xml`,
      `${siteUrl}/sitemap/projects.xml`,
    ],
  },
};