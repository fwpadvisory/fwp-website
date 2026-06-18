import { COMPANY, NAV_ITEMS, LEGAL_ITEMS } from './site';
import type { Faq } from './faqs';

/** Absolute URL helper. */
export const abs = (path: string, site: URL | undefined) =>
  new URL(path, site ?? 'https://fwpadvisory.com.au').href;

/** Organization JSON-LD (site-wide). */
export function organizationLd(site: URL | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: abs('/', site),
    logo: abs('/favicon.png', site),
    image: abs('/og-default.png', site),
    email: COMPANY.email,
    telephone: COMPANY.phone,
    description:
      'Strategy-led asset protection and succession advisory for Australian business owners, families, and asset holders.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Corporate House, 138 Juliette St',
      addressLocality: 'Greenslopes',
      addressRegion: 'QLD',
      postalCode: '4120',
      addressCountry: 'AU',
    },
    areaServed: 'AU',
  };
}

/** WebSite JSON-LD (site-wide). */
export function websiteLd(site: URL | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    url: abs('/', site),
    description:
      'Asset protection and succession strategy for business owners, families, and asset holders.',
    publisher: { '@type': 'Organization', name: COMPANY.name },
    inLanguage: 'en-AU',
  };
}

/** FAQPage JSON-LD from a list of Q&A. */
export function faqPageLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** BreadcrumbList JSON-LD auto-derived from a pathname (skips home). */
export function breadcrumbLd(pathname: string, site: URL | undefined) {
  const labelFor = (slug: string) => {
    const match = [...NAV_ITEMS, ...LEGAL_ITEMS].find((i) => i.href === `/${slug}`);
    if (match) return match.label;
    if (slug === 'guide') return 'Free Guide';
    return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  const items = [{ name: 'Home', item: abs('/', site) }];
  let acc = '';
  for (const seg of segments) {
    acc += `/${seg}`;
    items.push({ name: labelFor(seg), item: abs(acc, site) });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };
}
