import { sanityClient } from 'sanity:client';

/**
 * Shared Sanity client, configured by the @sanity/astro integration in
 * astro.config.mjs (env-driven: PUBLIC_SANITY_PROJECT_ID / _DATASET).
 *
 * This is the single documented data-access point. GROQ queries for articles,
 * resources, FAQs, videos, and siteSettings are added in Phase 3.
 */
export const sanity = sanityClient;
