// Legal page content — client-provided drafts (TEXTS ASSETS, "Draft for Legal Review v01").
// Sent to Kaella Forbes (LightYear Legal) for review. Pages stay `noindex` until Peter
// confirms after review. Wording is reproduced as supplied (em/en dashes normalised to
// hyphens to match site style); do not materially edit without approval.

export type LegalBlock = { p: string } | { ul: string[] };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDocData {
  title: string;
  effectiveDate?: string;
  intro: LegalBlock[];
  sections: LegalSection[];
}

const ABN = 'Family Wealth Protection Advisory Pty Ltd ABN 73 687 802 722, trading as FWP Advisory';

export const PRIVACY_POLICY: LegalDocData = {
  title: 'Privacy Policy',
  effectiveDate: 'July 2026',
  intro: [
    { p: `${ABN}, respects your privacy and is committed to handling personal information responsibly.` },
    { p: 'This Privacy Policy explains how we collect, use, disclose, store and protect personal information when you visit our website, contact us or use our services.' },
  ],
  sections: [
    {
      heading: '1. Information we may collect',
      blocks: [
        { p: 'Depending on your dealings with us and the services you request, we may collect:' },
        {
          ul: [
            'your name, contact details and identity information;',
            'information about your family, relationships, business interests, assets, liabilities and financial circumstances;',
            'accounting records, bank transactions, invoices, payroll information and taxation records;',
            'tax file numbers and other government-related identifiers where collection is authorised or required;',
            'credit, lending and insurance information;',
            'company, trust, superannuation and other entity information;',
            'information provided through surveys, forms, meetings, emails and telephone conversations;',
            'payment and transaction information;',
            'website usage information, including your IP address, browser type and interactions with our website; and',
            'other information reasonably required to provide our services or meet legal and professional obligations.',
          ],
        },
        { p: 'Some information may be sensitive or subject to additional legal protections. We only collect such information where it is reasonably necessary and permitted by law.' },
      ],
    },
    {
      heading: '2. How we collect information',
      blocks: [
        { p: 'We generally collect personal information directly from you. We may also collect information from:' },
        {
          ul: [
            'your authorised representatives and professional advisers;',
            'our external tax consultant, legal professionals and other service providers involved in your matter;',
            'publicly available records, including company and property records;',
            'organisations you authorise us to contact; and',
            'website analytics, cookies and similar technologies.',
          ],
        },
        { p: 'Where practicable, you may interact with us without identifying yourself. However, we may be unable to provide particular services without the information required to assess and act on your circumstances.' },
      ],
    },
    {
      heading: '3. How we use personal information',
      blocks: [
        { p: 'We may use personal information to:' },
        {
          ul: [
            'respond to enquiries and arrange meetings;',
            'assess your circumstances and provide the services you request;',
            'prepare, coordinate and present asset-protection, succession and structural strategies;',
            'provide accounting, bookkeeping, business advisory, company secretarial and ASIC compliance support;',
            'coordinate taxation services through our external tax consultant;',
            'facilitate referrals to related entities or external professionals for mortgage broking, personal insurance or legal services;',
            'manage engagements, payments and business records;',
            'improve our website, communications and services;',
            'send information or marketing communications where permitted by law;',
            'manage fraud, cyber-security, legal and commercial risks; and',
            'meet professional, regulatory and legal obligations.',
          ],
        },
        { p: 'You may unsubscribe from marketing communications at any time using the unsubscribe facility provided or by contacting us.' },
      ],
    },
    {
      heading: '4. Disclosure of personal information',
      blocks: [
        { p: 'We may disclose relevant personal information to:' },
        {
          ul: [
            'our external tax consultant for taxation and compliance services;',
            'lawyers and other professional advisers involved in asset-protection, succession or structural matters;',
            'offshore accounting, bookkeeping and administrative personnel working under our direction;',
            'related entities or external providers where you request or consent to a mortgage-broking or personal-insurance referral;',
            'technology, document-management, communications, data-storage and administrative service providers;',
            'lenders, insurers, regulators, government agencies, courts or other parties where relevant, required or authorised; and',
            'other persons where you authorise or reasonably expect the disclosure.',
          ],
        },
        { p: 'We disclose only the information reasonably necessary for the relevant service or purpose.' },
      ],
    },
    {
      heading: '5. Overseas access and processing',
      blocks: [
        { p: 'We may use carefully selected offshore resources in Vietnam to assist our Australian team in delivering accounting and related services. Personal information may therefore be accessed or processed in Vietnam.' },
        { p: 'We take reasonable steps to require overseas service providers to handle personal information securely and consistently with applicable Australian privacy requirements. Privacy laws and protections in those countries may differ from those applying in Australia.' },
      ],
    },
    {
      heading: '6. Website analytics and cookies',
      blocks: [
        { p: 'Our website may use cookies and analytics tools to understand how visitors use the website and to improve its performance. You can adjust your browser settings to restrict cookies, although this may affect some website functionality.' },
      ],
    },
    {
      heading: '7. Storage and security',
      blocks: [
        { p: 'We take reasonable administrative, technical and physical measures to protect personal information from misuse, interference, loss and unauthorised access, modification or disclosure.' },
        { p: 'No internet transmission or electronic storage system is completely secure. We cannot guarantee the absolute security of information transmitted electronically.' },
        { p: 'We retain personal information only for as long as reasonably required for our services, business records and legal obligations. Information may then be securely deleted or de-identified where appropriate.' },
      ],
    },
    {
      heading: '8. Access and correction',
      blocks: [
        { p: 'You may request access to personal information we hold about you or ask us to correct information that is inaccurate, incomplete or out of date.' },
        { p: 'We may need to verify your identity before responding. In limited circumstances, the law may permit us to refuse access. If that occurs, we will explain the reason where legally permitted.' },
      ],
    },
    {
      heading: '9. Privacy enquiries and complaints',
      blocks: [
        { p: 'If you have a privacy enquiry or complaint, please contact FWP Advisory by email at hello@fwpadvisory.com.au or by phone on 0475 219 534.' },
        { p: 'We will review and respond to your concern within a reasonable period. If you are not satisfied with our response, you may be entitled to contact the Office of the Australian Information Commissioner at oaic.gov.au.' },
      ],
    },
    {
      heading: '10. Changes to this policy',
      blocks: [
        { p: 'We may update this Privacy Policy to reflect changes to our services, practices or legal obligations. The current version will be published on this website with its effective date.' },
      ],
    },
  ],
};

export const DISCLAIMER: LegalDocData = {
  title: 'General Information Disclaimer',
  intro: [
    { p: `The information on this website is provided by ${ABN}.` },
  ],
  sections: [
    {
      heading: '1. General information only',
      blocks: [
        { p: 'Website content is general information only. It does not take into account your personal circumstances, objectives or needs and should not be relied upon as a substitute for advice appropriate to your circumstances.' },
        { p: 'Unless provided under a separate written engagement by an appropriately authorised professional, website content is not legal advice, taxation advice, financial product advice or credit advice. You should obtain appropriate professional advice before acting or deciding not to act.' },
      ],
    },
    {
      heading: "2. FWP Advisory's role",
      blocks: [
        { p: 'FWP Advisory provides strategic asset-protection, succession, structural, accounting, bookkeeping, business advisory and corporate compliance services.' },
        { p: 'FWP Advisory is not a law firm. Legal advice and legal documents are provided by external legal professionals. Depending on the matter, FWP may coordinate that work or recommend that you engage directly with the legal professional.' },
        { p: 'FWP Advisory is not a tax agent. Tax services requiring external preparation or lodgement are coordinated through an external tax consultant under the arrangements disclosed in the relevant engagement letter.' },
        { p: 'Mortgage-broking services are available through referral to a related entity. Personal-insurance services are available through referral to JPL Wealth, which provides general advice and education. Those services are subject to the relevant provider’s own engagement and disclosure documents.' },
      ],
    },
    {
      heading: '3. No professional engagement',
      blocks: [
        { p: 'Viewing this website, downloading material, completing an online form, making an enquiry or attending a discovery meeting does not by itself create a professional adviser-client relationship.' },
        { p: 'A professional engagement begins only when the scope, responsibilities and fees have been agreed in writing by the relevant parties.' },
      ],
    },
    {
      heading: '4. Accuracy, currency and outcomes',
      blocks: [
        { p: 'We take reasonable care when preparing website content. However, laws, regulatory requirements, commercial conditions and individual circumstances change. We do not warrant that all website information is complete, current or suitable for your circumstances.' },
        { p: 'References to strategies, structures, benefits or possible outcomes are illustrative only. No particular legal, taxation, financial, credit, insurance or commercial outcome is guaranteed.' },
      ],
    },
    {
      heading: '5. Case studies and examples',
      blocks: [
        { p: 'Case studies and examples may be simplified, combined or anonymised to protect confidentiality. They illustrate general concepts only. Past or illustrative outcomes do not guarantee that the same or a similar outcome will apply to another person.' },
      ],
    },
    {
      heading: '6. External links and providers',
      blocks: [
        { p: 'This website may contain links to third-party websites, booking platforms, related entities and professional service providers. These links are provided for convenience and do not constitute an endorsement of all content or services offered by those parties.' },
        { p: 'FWP Advisory does not control and is not responsible for the availability, accuracy, security, terms or privacy practices of third-party websites or services.' },
      ],
    },
    {
      heading: '7. Limitation',
      blocks: [
        { p: 'To the maximum extent permitted by law, FWP Advisory excludes liability arising from reliance on general website information or from the use or unavailability of this website.' },
        { p: 'Nothing in this Disclaimer excludes, restricts or modifies any right, consumer guarantee or remedy that cannot lawfully be excluded under the Australian Consumer Law or other applicable legislation.' },
      ],
    },
  ],
};

export const TERMS_OF_USE: LegalDocData = {
  title: 'Website Terms of Use',
  effectiveDate: 'July 2026',
  intro: [
    { p: `These Terms of Use apply to the website operated by ${ABN}.` },
    { p: 'By accessing or using this website, you agree to these Terms of Use. If you do not agree, you should discontinue using the website.' },
  ],
  sections: [
    {
      heading: '1. Website purpose',
      blocks: [
        { p: 'This website provides general information about FWP Advisory and the services available directly, through related entities or through external professional arrangements.' },
        { p: 'Website content does not constitute advice tailored to your circumstances. The General Information Disclaimer forms part of these Terms of Use.' },
      ],
    },
    {
      heading: '2. No professional engagement',
      blocks: [
        { p: 'Using this website, submitting an enquiry, downloading material or booking a discovery meeting does not automatically create a professional engagement.' },
        { p: 'Services provided by FWP Advisory are governed by a separate written scope or engagement agreement dealing with the services, responsibilities and fees. Services provided by related entities, lawyers, the external tax consultant or other professionals may be subject to their own engagement terms, costs agreements and disclosure documents.' },
      ],
    },
    {
      heading: '3. Permitted use',
      blocks: [
        { p: "You may use this website for lawful personal or business purposes connected with considering or obtaining information about FWP Advisory's services." },
        { p: 'You must not:' },
        {
          ul: [
            "use the website unlawfully, fraudulently or in a manner that infringes another person's rights;",
            'interfere with the operation, security or availability of the website;',
            'attempt to obtain unauthorised access to the website or associated systems;',
            'introduce malicious software or harmful material; or',
            'reproduce, distribute or commercially exploit website content without permission.',
          ],
        },
      ],
    },
    {
      heading: '4. Intellectual property',
      blocks: [
        { p: 'Unless otherwise stated, the website and its content - including text, graphics, branding, downloads and design elements - are owned by or licensed to FWP Advisory and protected by intellectual-property laws.' },
        { p: 'You may view, download or print content for your own non-commercial use. You must not reproduce, modify, distribute, publish or commercially exploit the content without prior written permission.' },
      ],
    },
    {
      heading: '5. Website availability and changes',
      blocks: [
        { p: 'We may update, suspend or withdraw any part of the website without notice. We do not guarantee that the website will always be available, uninterrupted, secure or free from errors or harmful components.' },
      ],
    },
    {
      heading: '6. Third-party websites and services',
      blocks: [
        { p: 'The website may link to third-party websites, booking platforms, resources, related entities or professional service providers. FWP Advisory does not control those services and is not responsible for their content, availability, security, terms or privacy practices. You should review the applicable third-party terms before using them.' },
      ],
    },
    {
      heading: '7. Liability',
      blocks: [
        { p: 'To the maximum extent permitted by law, FWP Advisory is not liable for loss arising from reliance on general website information, use or unavailability of the website, errors or omissions in website content, third-party websites or services, or unauthorised access to or interference with the website.' },
        { p: 'Nothing in these Terms excludes, restricts or modifies any consumer guarantee, right or remedy that cannot lawfully be excluded under the Australian Consumer Law or other applicable legislation.' },
      ],
    },
    {
      heading: '8. Privacy',
      blocks: [
        { p: 'Our collection and handling of personal information through the website and our services is described in our Privacy Policy.' },
      ],
    },
    {
      heading: '9. Governing law',
      blocks: [
        { p: 'These Terms are governed by the laws of Queensland, Australia. You submit to the jurisdiction of the courts of Queensland and any courts entitled to hear appeals from them.' },
      ],
    },
    {
      heading: '10. Changes to these terms',
      blocks: [
        { p: 'We may amend these Terms of Use periodically. The updated version will take effect when published on the website.' },
      ],
    },
    {
      heading: '11. Contact',
      blocks: [
        { p: 'Questions about these Terms may be directed to FWP Advisory by email at hello@fwpadvisory.com.au or by phone on 0475 219 534.' },
      ],
    },
  ],
};
