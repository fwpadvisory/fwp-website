export interface Faq {
  q: string;
  a: string;
}

/** Home-page FAQ (prototype: FAQSection). Reused for FAQPage JSON-LD in Phase 5. */
export const homeFaqs: Faq[] = [
  {
    q: 'Are you lawyers?',
    a: 'No. We are strategic advisors. We help identify the risks, design the strategy, and coordinate with specialist legal professionals where legal documents or advice are required.',
  },
  {
    q: 'Is this legal or financial advice?',
    a: 'The website provides general information only. Any legal or financial advice needs to be provided through the appropriate licensed or qualified professional.',
  },
  {
    q: 'Who is this service for?',
    a: 'It is generally suited to business owners, professionals, investors, families with entities or trusts, blended families, and people who want greater control over how assets are structured and passed on.',
  },
  {
    q: 'What happens in the Discovery Meeting?',
    a: 'We discuss your situation, current structures, key risks, and what you want to happen. The aim is to decide whether a strategy paper would be useful for your circumstances.',
  },
  {
    q: 'Do I have to proceed after the strategy meeting?',
    a: 'No. The strategy presentation is designed to give you clarity. You can then decide whether to proceed with implementation.',
  },
  {
    q: 'What if I already have a trust, company, will, or estate plan?',
    a: 'That is often when a review is most useful. Existing structures may still be appropriate, or they may need updating to reflect your current risks, assets, and intentions.',
  },
  {
    q: 'Do you work with my existing accountant or lawyer?',
    a: 'Where appropriate, yes. We can work with your existing professional advisers or coordinate specialist support if additional expertise is required.',
  },
  {
    q: 'Is this only for very wealthy families?',
    a: 'No. The issue is not just the size of the asset pool. The need usually arises where there is risk, complexity, family sensitivity, business exposure, or a strong desire for control.',
  },
];
