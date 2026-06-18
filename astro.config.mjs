import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// Final production domain is confirmed in Phase 7 (DNS access). Override via PUBLIC_SITE_URL.
const SITE_URL = env.PUBLIC_SITE_URL || 'https://fwpadvisory.com.au';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    sanity({
      // Placeholder fallbacks keep dev/build working before the real project exists.
      // Real values arrive in Phase 3 via env (PUBLIC_SANITY_PROJECT_ID / _DATASET).
      projectId: env.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
      dataset: env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: env.PUBLIC_SANITY_API_VERSION || '2024-01-01',
      useCdn: false,
      studioBasePath: '/studio', // embedded Sanity Studio
    }),
    sitemap({
      // Keep gated/noindex legal placeholders and the /studio admin out of the sitemap.
      filter: (page) => !/\/(disclaimer|privacy|terms)\/?$/.test(page) && !page.includes('/studio'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
