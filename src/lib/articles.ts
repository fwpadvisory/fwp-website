export interface ArticleCard {
  title: string;
  category: string;
  summary: string;
  slug?: string;
}

/**
 * The 3 prototype article stubs (titles + summaries only; bodies are TODO content).
 * Used as the fallback on /resources until Sanity has content, and mirrored by the
 * seed file (sanity/seed.ndjson) for importing into a real dataset.
 */
export const ARTICLE_STUBS: ArticleCard[] = [
  {
    title: 'Why asset protection should be considered before pressure appears',
    category: 'Asset Protection',
    summary:
      'A practical article on why structures are easier to review before claims, disputes, creditor pressure, or family conflict arise.',
  },
  {
    title: 'Family protection trusts and the importance of ongoing records',
    category: 'Family Protection Trusts',
    summary:
      'An overview of why trusts and related structures need ongoing administration, accounting records, and regular review.',
  },
  {
    title: 'Succession planning for business owners and blended families',
    category: 'Succession Planning',
    summary:
      'A discussion of common succession risks where business interests, family expectations, and control issues overlap.',
  },
];
