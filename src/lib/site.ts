export interface NavItem {
  href: string;
  label: string;
}

/** Primary navigation (matches the prototype's `pages` array). */
export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

/** Footer legal links (drafts - not for publication until sign-off). */
export const LEGAL_ITEMS: NavItem[] = [
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
];

/** Lead magnet (prototype: leadMagnet). */
export const LEAD_MAGNET = {
  title: 'The Guide to Protecting Family Wealth',
  summary:
    'A practical FWP guide to the key risks, structures, succession issues and control questions that can affect family wealth before pressure appears.',
} as const;

/** Free guide PDF, hosted statically in /public. Delivered on /thank-you after
 *  BOMA capture. Swap this file (or path) to update the downloadable guide. */
export const GUIDE_PDF = '/FWP-Guide-to-Protecting-Family-Wealth.pdf';

/** Company facts (from the prototype contact section). */
export const COMPANY = {
  name: 'Family Wealth Protection Advisory Pty Ltd',
  shortName: 'FWP Advisory',
  abn: '73 687 802 722',
  email: 'hello@fwpadvisory.com.au',
  phone: '+61 475 219 534',
  phoneHref: 'tel:+61475219534',
  address: 'Corporate House, 138 Juliette St, Greenslopes QLD 4120',
  compliance: 'General information only. Not legal or financial advice.',
} as const;
