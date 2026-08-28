import { sanityClient } from 'sanity:client';
import type { ArticleCard } from './articles';

/**
 * Shared Sanity client, configured by the @sanity/astro integration in
 * astro.config.mjs (env-driven: PUBLIC_SANITY_PROJECT_ID / _DATASET).
 */
export const sanity = sanityClient;

/** True once a real project is wired (not the placeholder fallback). */
export const isSanityConfigured = () => {
  const id = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  return Boolean(id && id !== 'placeholder');
};

export interface ArticleFull extends ArticleCard {
  excerpt?: string;
  body?: unknown[];
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: string;
}

const CARDS_QUERY = `*[_type == "article" && defined(slug.current)] | order(publishedAt desc){
  title, "slug": slug.current, category, "summary": excerpt, publishedAt,
  author,
  "image": coverImage.asset->url
}`;

const BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0]{
  title, "slug": slug.current, category, "summary": excerpt, excerpt, body, publishedAt,
  author,
  disclaimer, sourceNote, seoTitle, seoDescription, "coverImage": coverImage.asset->url
}`;

/** Article cards for the Resources grid. Empty until a real project has content. */
export async function getArticleCards(): Promise<ArticleCard[]> {
  if (!isSanityConfigured()) return [];
  try {
    return (await sanity.fetch<ArticleCard[]>(CARDS_QUERY)) ?? [];
  } catch {
    return [];
  }
}

/** Full article for /resources/[slug]. */
export async function getArticleBySlug(slug: string): Promise<ArticleFull | null> {
  if (!isSanityConfigured()) return null;
  try {
    return (await sanity.fetch<ArticleFull>(BY_SLUG_QUERY, { slug })) ?? null;
  } catch {
    return null;
  }
}

export interface FeaturedVideo {
  title: string;
  embedId: string;
}

const VIDEO_QUERY = `*[_type == "video" && (defined(embedId) || defined(url))]
  | order(coalesce(publishedAt, _createdAt) desc)[0]{ title, embedId, url }`;

/**
 * YouTube id from whatever an editor pasted: a bare id, a youtu.be link, a
 * watch link, or an embed link. Null when nothing id-shaped is found.
 */
export function youtubeId(value?: string): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  return trimmed.match(/(?:youtu\.be\/|\/embed\/|[?&]v=)([\w-]{11})/)?.[1] ?? null;
}

/** Newest video from the CMS for the Resources page. Null until one is published. */
export async function getFeaturedVideo(): Promise<FeaturedVideo | null> {
  if (!isSanityConfigured()) return null;
  try {
    const doc = await sanity.fetch<{ title?: string; embedId?: string; url?: string }>(VIDEO_QUERY);
    const embedId = youtubeId(doc?.embedId) ?? youtubeId(doc?.url);
    if (!doc?.title || !embedId) return null;
    return { title: doc.title, embedId };
  } catch {
    return null;
  }
}

// Further queries (resources, faqs, siteSettings) follow the same guarded
// pattern and are added as those sections move onto the CMS.
