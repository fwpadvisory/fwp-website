import type { APIRoute } from 'astro';

// Dynamic robots.txt so the Sitemap URL always matches the configured site.
// AI crawlers are intentionally NOT blocked (per project brief).
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site ?? 'https://fwpadvisory.com.au').href;
  const body = `User-agent: *
Allow: /
Disallow: /studio

Sitemap: ${sitemap}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
