export interface ArticleCard {
  title: string;
  category?: string;
  summary: string;
  slug?: string;
  image?: string;
  publishedAt?: string;
}

export type ArticleBlock = { h: string } | { p: string } | { ul: string[] };

export interface StaticArticle extends ArticleCard {
  slug: string;
  publishedAt: string;
  body: ArticleBlock[];
  disclaimer: string;
  sourceNote: string;
}

/** Render the static article block model to HTML (mirrors the Sanity portable-text output). */
export function renderArticleBlocks(blocks: ArticleBlock[]): string {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return blocks
    .map((b) => {
      if ('h' in b) return `<h2>${esc(b.h)}</h2>`;
      if ('ul' in b) return `<ul>${b.ul.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
      return `<p>${esc(b.p)}</p>`;
    })
    .join('\n');
}

/**
 * The three approved FWP articles (TEXTS ASSETS, "Approved Copy v01"). Published as
 * native pages. Future articles are added by the client in Sanity Studio (/studio) and
 * merge into Latest Articles automatically — see src/lib/sanity.ts.
 */
export const APPROVED_ARTICLES: StaticArticle[] = [
  {
    title: 'A Trust Should Not Operate Like a Personal Bank Account',
    slug: 'trust-not-personal-bank-account',
    category: 'Family Protection Trusts',
    publishedAt: '2026-07-15',
    image: '/images/articles/trust-control.jpg',
    summary:
      'The problem is often not the trust itself - it is how the trust is controlled and used. Three things to review before pressure appears.',
    body: [
      { p: 'A trust should not operate like a personal bank account with different paperwork. That is where people can get into trouble.' },
      { p: 'The asset may be held in the trust. The deed may be properly drafted. The annual resolutions may be completed.' },
      { p: 'But if one person controls everything, uses the assets as though they are personally available and keeps poor records of important decisions, questions may arise about how the trust genuinely operates.' },
      { p: 'The problem is often not the trust itself. It is how the trust is controlled and used.' },
      { p: 'For business owners and families, the practical answer is to respect the structure in day-to-day life - not only when a dispute or other problem arises.' },
      { h: 'Three things to review' },
      { h: '1. Who actually controls the trust?' },
      { p: 'Look at the trustee, the directors of any corporate trustee, the appointor, the guardian and the beneficiaries. These positions can affect who controls the structure and who may benefit from it. They should be considered together rather than in isolation.' },
      { h: '2. Are important decisions properly recorded?' },
      { p: 'Distributions, loans, asset purchases, payments for beneficiaries and other significant decisions should be recorded when they occur. Annual resolutions are important, but they do not replace proper records of the trust’s activities throughout the year.' },
      { h: '3. Are trust assets being treated like personal assets?' },
      { p: 'Trust and personal transactions should be kept separate. If the trust pays a private expense, allows someone to use an asset or advances money to a beneficiary, the transaction should be properly considered and recorded. The more informal the arrangement becomes, the harder it may be to explain later.' },
      { p: 'A trust can be a valuable part of an asset-protection strategy. But the structure needs to be real in practice, not just on paper.' },
      { p: 'That means maintaining proper records, respecting the trustee’s role and making considered decisions well before a claim or dispute arises.' },
    ],
    disclaimer:
      'General information only. This article does not constitute legal, tax or financial advice. Professional advice should be obtained before establishing, changing or acting through a trust.',
    sourceNote:
      'This article draws on issues considered in Australian Securities and Investments Commission, in the matter of Richstar Enterprises Pty Ltd v Carey (No 6) [2006] FCA 814. The case concerned an interim asset-freezing application. It does not establish that control of a discretionary trust automatically makes the trust assets the controller’s personal property.',
  },
  {
    title: 'Does a Family Trust Protect Your Assets?',
    slug: 'does-a-family-trust-protect-your-assets',
    category: 'Asset Protection',
    publishedAt: '2026-07-10',
    image: '/images/articles/family-trust.jpg',
    summary:
      'A family trust can be a valuable asset-protection tool - but it is not a guaranteed shield. What matters is control, benefit and how it has operated in practice.',
    body: [
      { p: 'A family trust can be a valuable asset-protection tool. But it is not a guaranteed shield.' },
      { p: 'The trust deed is important. So is the name in which the assets are held. But those things do not tell the whole story.' },
      { p: 'What also matters is who controls the trust, who benefits from it and how the trust has operated in practice.' },
      { h: 'Control matters' },
      { p: 'A trust can involve several positions. There is the trustee, the directors of any corporate trustee, the appointor, the guardian and the beneficiaries.' },
      { p: 'If one person controls all the important positions, makes every decision and treats the trust assets as though they are personally available, the protection expected from the structure may be reduced.' },
      { p: 'The structure should therefore be reviewed as a whole - not simply by looking at the trust deed.' },
      { h: 'Family-law disputes need particular care' },
      { p: 'Trusts can become especially complicated following a relationship breakdown.' },
      { p: 'This was seen in Kennon v Spry, where the High Court considered a family trust as part of matrimonial property proceedings.' },
      { p: 'The case does not mean every family trust will automatically form part of a property settlement.' },
      { p: 'It does show that a court may look closely at the trust’s control, the benefits received by family members and the way the structure has been used.' },
      { h: 'Avoid last-minute changes' },
      { p: 'Restructuring a trust after a dispute or creditor problem has emerged can attract attention.' },
      { p: 'This might include changing trustees or directors, transferring assets, amending the deed or altering the appointor and guardian positions.' },
      { p: 'There may be valid reasons for making these changes. However, they should have a clear purpose, be properly documented and be supported by appropriate legal and tax advice.' },
      { p: 'Changes made only after a problem appears may not achieve the intended protection.' },
      { h: 'Three practical ways to reduce risk' },
      { h: '1. Review the control positions early' },
      { p: 'Understand who controls the trustee and who has the power to remove or replace it.' },
      { h: '2. Keep proper records' },
      { p: 'Distributions, loans, asset transfers and major decisions should be documented when they occur.' },
      { h: '3. Review the structure before problems arise' },
      { p: 'Do not wait for a relationship breakdown, creditor claim or other dispute before checking whether the trust still suits its intended purpose.' },
      { p: 'Asset protection is not about hiding assets or avoiding lawful obligations. It is about establishing the right structure, operating it properly and making considered decisions before difficulties arise.' },
      { p: 'A family trust may form part of that strategy. Its effectiveness will depend on how it is structured, controlled and maintained.' },
    ],
    disclaimer:
      'General information only. This article does not constitute legal, tax or financial advice. Professional advice should be obtained before establishing, restructuring or transferring assets through a trust.',
    sourceNote:
      'This article refers to Kennon v Spry; Spry v Kennon [2008] HCA 56, a High Court decision concerning a trust in matrimonial property proceedings. The treatment of any trust will depend on its particular terms, control arrangements and legal context.',
  },
  {
    title: 'When Your Will and Superannuation Say Different Things',
    slug: 'when-your-will-and-superannuation-differ',
    category: 'Succession Planning',
    publishedAt: '2026-07-05',
    image: '/images/articles/will-super.jpg',
    summary:
      'Superannuation does not automatically form part of your estate, so your will and your super can produce different outcomes. What to review so they work together.',
    body: [
      { p: 'Many people assume their will controls what happens to all their assets when they die. Superannuation can be different.' },
      { p: 'A superannuation death benefit does not automatically form part of a deceased person’s estate. It may be paid directly to an eligible beneficiary or to the deceased’s legal personal representative.' },
      { p: 'This means a person’s will and superannuation arrangements can produce different outcomes.' },
      { h: 'A will may not control your superannuation' },
      { p: 'A will governs the assets belonging to the deceased estate.' },
      { p: 'Superannuation is held by the fund’s trustee. The trustee must deal with the death benefit according to superannuation law, the fund’s governing rules and any valid death-benefit nomination.' },
      { p: 'If the benefit is paid directly to a beneficiary, the directions in the will may not determine who receives it.' },
      { p: 'That is why a will should not be reviewed on its own.' },
      { h: 'Check the death-benefit nomination' },
      { p: 'A death-benefit nomination tells the trustee who the member wants to receive their superannuation.' },
      { p: 'Depending on the fund, the nomination may be binding or non-binding, and it may lapse after a certain period.' },
      { p: 'A nomination may not work as intended if it:' },
      { ul: ['has expired;', 'does not comply with the fund’s rules;', 'has not been completed correctly; or', 'names someone who cannot receive the benefit directly.'] },
      { p: 'The nomination should be reviewed regularly and whenever family circumstances change.' },
      { h: 'Who will control the SMSF after death?' },
      { p: 'Control is particularly important where superannuation is held through a self-managed super fund.' },
      { p: 'After a member dies, the surviving trustee or the directors of the corporate trustee may be responsible for decisions about the death benefit.' },
      { p: 'If control passes to someone whose interests differ from the deceased member’s wishes, a dispute can arise.' },
      { p: 'This was seen in Ioppolo & Hesford v Conti.' },
      { p: 'The wife’s will expressed a wish that her superannuation benefits pass to her children rather than her husband. However, the superannuation was held through an SMSF, and her husband remained involved in controlling the fund after her death.' },
      { p: 'The case shows why expressing a wish in a will may not be enough.' },
      { h: 'Three things to review' },
      { h: '1. Is the death-benefit nomination current and valid?' },
      { p: 'Check that it has been completed correctly, has not expired and reflects the intended outcome.' },
      { h: '2. Do the documents work together?' },
      { p: 'The will, SMSF deed, death-benefit nomination and related estate-planning documents should be reviewed together.' },
      { h: '3. Who will control the fund after death?' },
      { p: 'Consider who will act as trustee or control the corporate trustee when a member dies.' },
      { p: 'Estate planning is not only about preparing a will. It also requires an understanding of which assets fall into the estate, which assets pass outside it and who will control the structures holding those assets after death.' },
      { p: 'The objective is to make sure the will, superannuation arrangements and control positions all work together.' },
    ],
    disclaimer:
      'General information only. This article does not constitute legal, tax or financial advice. Professional advice should be obtained regarding wills, superannuation death benefits and SMSF succession arrangements.',
    sourceNote:
      'This article refers to Ioppolo & Hesford v Conti [2013] WASC 389. The outcome depended on the SMSF deed, the status of the deceased member’s nomination and the particular control arrangements.',
  },
];

/** Card view of the approved articles for the Resources list. */
export const APPROVED_ARTICLE_CARDS: ArticleCard[] = APPROVED_ARTICLES.map((a) => ({
  title: a.title,
  category: a.category,
  summary: a.summary,
  slug: a.slug,
  image: a.image,
  publishedAt: a.publishedAt,
}));
