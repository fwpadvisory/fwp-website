import React, { useState } from "react";
import { ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, Scale, Building2, Users, FileText, Mail, Phone, MapPin, Menu, X, Landmark, Network, SearchCheck, Handshake, Briefcase, HeartHandshake, Layers, ClipboardCheck, Home, HelpCircle, MessageSquareText, Gavel, UserRoundCheck } from "lucide-react";
import { motion } from "framer-motion";

const bookingUrl = "https://calendar.app.google/ByzVPFdD3qm9VzBg7";
const aqua = "#6FD7E3";

const pages = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Contact" },
];

const leadMagnet = {
  title: "The Guide to Protecting Family Wealth",
  summary: "A practical FWP guide to the key risks, structures, succession issues and control questions that can affect family wealth before pressure appears.",
};

const resources = [
  {
    title: "Why asset protection should be considered before pressure appears",
    category: "Asset Protection",
    summary: "A practical article on why structures are easier to review before claims, disputes, creditor pressure, or family conflict arise.",
  },
  {
    title: "Family protection trusts and the importance of ongoing records",
    category: "Family Protection Trusts",
    summary: "An overview of why trusts and related structures need ongoing administration, accounting records, and regular review.",
  },
  {
    title: "Succession planning for business owners and blended families",
    category: "Succession Planning",
    summary: "A discussion of common succession risks where business interests, family expectations, and control issues overlap.",
  },
];

const resourcePages = [
  { id: "guide", label: "Free Guide" },
];

const legalPages = [
  { id: "disclaimer", label: "Disclaimer" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Use" },
];

function LogoMark({ href = "#/" }) {
  return (
    <a href={href} className="flex items-center gap-3 text-left" aria-label="Go to home page">
      <img
        src="/fwp-logo.png"
        alt="Family Wealth Protection Advisory"
        className="h-20 w-auto"
      />
    </a>
  );
}

function Button({ children, variant = "primary", href, onClick, type = "button", targetSelf = false }) {
  const base = "inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";
  const className = variant === "secondary"
    ? `${base} border border-[#6FD7E3]/40 text-white hover:border-[#6FD7E3] hover:bg-white/5`
    : `${base} bg-[#6FD7E3] text-[#0E1020] shadow-lg shadow-[#6FD7E3]/20 hover:-translate-y-0.5 hover:bg-[#8FE3EC]`;

  if (href) {
    const isInternal = href.startsWith("#/") || targetSelf;
    return <a href={href} target={isInternal ? undefined : "_blank"} rel={isInternal ? undefined : "noopener noreferrer"} className={className}>{children}</a>;
  }

  return <button type={type} onClick={onClick} className={className}>{children}</button>;
}

function BookingButton({ children = "Book Your Discovery Meeting", compact = false }) {
  const className = compact
    ? "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#6FD7E3] px-2.5 py-2 text-sm font-semibold leading-none text-[#0E1020] shadow-lg shadow-[#6FD7E3]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8FE3EC] lg:px-3.5"
    : "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#6FD7E3] px-6 py-3 text-sm font-semibold text-[#0E1020] shadow-lg shadow-[#6FD7E3]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8FE3EC]";

  const openBooking = () => {
    window.location.assign(bookingUrl);
  };

  return (
    <button type="button" onClick={openBooking} className={className}>
      {children}
    </button>
  );
}

function SectionLabel({ children }) {
  return <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6FD7E3]">{children}</div>;
}

function PageShell({ children }) {
  return <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>{children}</motion.div>;
}

function RiskCard({ icon: Icon, title }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
      <Icon className="mb-4 h-6 w-6 text-[#6FD7E3]" />
      <div className="text-sm font-medium text-white">{title}</div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, subtitle, idealFor, receives, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
      <Icon className="mb-5 h-7 w-7 text-[#6FD7E3]" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm font-medium text-[#8FE3EC]">{subtitle}</p>
      <p className="mt-4 text-sm leading-6 text-white/68">{children}</p>
      <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm leading-6 text-white/62">
        <p><span className="font-semibold text-white/85">Best for:</span> {idealFor}</p>
        <p><span className="font-semibold text-white/85">You receive:</span> {receives}</p>
      </div>
    </div>
  );
}

function SupportingServiceItem({ title, children }) {
  return (
    <details className="group rounded-2xl border border-[#6FD7E3]/20 bg-[#0E1020]/45 px-4 py-3 text-sm text-[#8FE3EC] transition hover:border-[#6FD7E3]/45">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold">
        {title}
        <span className="text-[#6FD7E3] transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 leading-6 text-white/65">{children}</p>
    </details>
  );
}

function AudienceSection() {
  const items = [
    { icon: Briefcase, text: "You own a business, investment assets, or entities that create exposure." },
    { icon: Layers, text: "You have trusts, companies, or structures that may no longer match your situation." },
    { icon: HeartHandshake, text: "You want wealth passed on clearly, especially in a blended or complex family situation." },
    { icon: AlertTriangle, text: "You are concerned about claims, creditors, family disputes, or unintended outcomes." },
  ];

  return (
    <section className="relative z-10 px-6 pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Is this for you?</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">This is for people who need more than a standard will, trust review, or accounting conversation.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, text }) => (
              <div key={text} className="rounded-2xl border border-white/10 bg-[#0E1020]/55 p-5">
                <Icon className="mb-4 h-6 w-6 text-[#6FD7E3]" />
                <p className="text-sm leading-6 text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CredibilityItem({ children }) {
  return <div className="rounded-2xl border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 px-4 py-3 text-sm font-semibold text-[#8FE3EC]">{children}</div>;
}

function LeadMagnetSection({ compact = false }) {
  return (
    <section className={`relative z-10 px-6 ${compact ? "py-8" : "py-20"} lg:px-8`}>
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionLabel>Free guide</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{leadMagnet.title}</h2>
          <p className="mt-5 text-base leading-7 text-white/70">{leadMagnet.summary}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#0E1020]/55 p-6">
          <h3 className="text-xl font-semibold text-white">Get the guide by email</h3>
          <p className="mt-3 text-sm leading-6 text-white/60">For people who are interested, but not ready to book a Discovery Meeting yet.</p>
          <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <input className="rounded-full border border-white/10 bg-[#0E1020]/75 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#6FD7E3]" placeholder="First name" />
            <input className="rounded-full border border-white/10 bg-[#0E1020]/75 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#6FD7E3]" placeholder="Email address" />
            <Button type="submit">Download</Button>
          </form>
          <p className="mt-4 text-xs leading-5 text-white/45">Prototype note: in production, this form should connect to your email marketing or CRM system and include privacy consent.</p>
        </div>
      </div>
    </section>
  );
}

function ScenarioSection() {
  const scenarios = [
    { icon: Briefcase, title: "Business owner exposure", text: "You own or operate a business and want to reduce the chance that business risks flow through to personal or family assets." },
    { icon: Layers, title: "Old trust or company structures", text: "You have entities that were set up years ago and may no longer reflect your family, asset position, or control objectives." },
    { icon: HeartHandshake, title: "Blended family succession", text: "You want to provide for people fairly while reducing the chance of confusion, conflict, or unintended asset movement." },
    { icon: Users, title: "Children and inheritance protection", text: "You want wealth passed on in a controlled way, rather than exposed to relationship breakdowns, poor decisions, or outside claims." },
    { icon: Scale, title: "Claims, creditors, or dispute risk", text: "You are concerned that assets could become exposed through litigation, guarantees, business pressure, or family conflict." },
    { icon: SearchCheck, title: "Second opinion on your current plan", text: "You already have documents or structures, but you are not sure they still work together or reflect your current wishes." },
  ];

  return (
    <section className="relative z-10 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel>Common situations</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">The risk usually becomes obvious after the damage is done.</h2>
          <p className="mt-6 text-lg leading-8 text-white/70">These are the types of situations where a clear asset protection and succession strategy can make the next step easier to understand.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <Icon className="mb-5 h-7 w-7 text-[#6FD7E3]" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouReceiveSection() {
  const items = [
    "Discovery Meeting and risk discussion",
    "Review of your current structures and intentions",
    "Personalised Strategy Paper in plain English",
    "Strategy Presentation Meeting",
    "Fixed-fee implementation pathway where appropriate",
    "Coordination with specialist legal professionals",
  ];

  return (
    <section className="relative z-10 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>What you receive</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">A clear strategy before you commit to implementation.</h2>
          <p className="mt-6 text-lg leading-8 text-white/70">The aim is to replace uncertainty with a written plan that explains the risks, recommended pathway, and next steps.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-[#6FD7E3]/15 bg-[#0E1020]/55 p-5">
              <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#6FD7E3]" />
              <p className="text-sm leading-6 text-white/75">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Are you lawyers?", a: "No. We are strategic advisors. We help identify the risks, design the strategy, and coordinate with specialist legal professionals where legal documents or advice are required." },
    { q: "Is this legal or financial advice?", a: "The website provides general information only. Any legal or financial advice needs to be provided through the appropriate licensed or qualified professional." },
    { q: "Who is this service for?", a: "It is generally suited to business owners, professionals, investors, families with entities or trusts, blended families, and people who want greater control over how assets are structured and passed on." },
    { q: "What happens in the Discovery Meeting?", a: "We discuss your situation, current structures, key risks, and what you want to happen. The aim is to decide whether a strategy paper would be useful for your circumstances." },
    { q: "Do I have to proceed after the strategy meeting?", a: "No. The strategy presentation is designed to give you clarity. You can then decide whether to proceed with implementation." },
    { q: "What if I already have a trust, company, will, or estate plan?", a: "That is often when a review is most useful. Existing structures may still be appropriate, or they may need updating to reflect your current risks, assets, and intentions." },
    { q: "Do you work with my existing accountant or lawyer?", a: "Where appropriate, yes. We can work with your existing professional advisers or coordinate specialist support if additional expertise is required." },
    { q: "Is this only for very wealthy families?", a: "No. The issue is not just the size of the asset pool. The need usually arises where there is risk, complexity, family sensitivity, business exposure, or a strong desire for control." },
  ];

  return (
    <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <SectionLabel>Questions</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">What people usually want to know before booking.</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                {faq.q}
                <HelpCircle className="h-5 w-5 shrink-0 text-[#6FD7E3] transition group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-sm leading-6 text-white/65">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ number, title, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#6FD7E3] text-sm font-bold text-[#0E1020]">{number}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{children}</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-32 lg:pt-24">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <SectionLabel>Asset protection & succession strategy</SectionLabel>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">Strengthen Your Asset Protection and Succession Strategy</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">For business owners, families, and asset holders who want clearer structures, reduced exposure, and greater control over how wealth is managed and passed on.</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <BookingButton>Book Your Discovery Meeting <ArrowRight className="ml-2 h-4 w-4" /></BookingButton>
          <Button variant="secondary" href="#/guide" targetSelf>Download Free Guide</Button>
        </div>
        <p className="mt-5 text-sm text-white/50">Ready now? Book a Discovery Meeting. Not ready yet? Start with the free guide.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
        <div className="rounded-[2rem] border border-[#6FD7E3]/20 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-[#6FD7E3]">Strategy-led advice</div>
              <h2 className="mt-3 text-3xl font-semibold text-white">Clear direction before implementation.</h2>
            </div>
            <ShieldCheck className="h-10 w-10 shrink-0 text-[#6FD7E3]" />
          </div>
          <div className="mt-8 space-y-4">
            {["Understand where your assets may be exposed", "Receive a clear, personalised strategy", "Coordinate implementation with specialist legal professionals"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#0E1020]/70 p-4">
                <CheckCircle2 className="h-5 w-5 text-[#6FD7E3]" />
                <span className="text-sm text-white/82">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-5">
            <p className="text-sm leading-6 text-white/75">Strategic advisors, not lawyers. You receive a clear plan first, then the right professionals are coordinated to help implement it properly.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <AudienceSection />
      <LeadMagnetSection compact />
      <ScenarioSection />

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Asset and succession risks are often missed until pressure appears.</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">The risk is not always obvious. Claims, disputes, outdated structures, and unclear succession plans can put control of your assets in someone else’s hands.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <RiskCard icon={Scale} title="Lawsuits and legal claims" />
            <RiskCard icon={Building2} title="Business risks and creditors" />
            <RiskCard icon={Users} title="Family breakdowns and disputes" />
            <RiskCard icon={AlertTriangle} title="Outdated trust arrangements" />
          </div>
          <div className="mt-12 rounded-3xl border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-7">
            <p className="text-xl font-medium text-white">This is not tax planning. This is not accounting.</p>
            <p className="mt-3 text-white/70">This is about reducing exposure, improving control, and making sure your intentions are clear before problems arise.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionLabel>Your guide</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Good structures should reflect your risks, intentions, and stage of life.</h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-white/70">
          <p>You’ve worked hard to build what you have. The question is whether your current structures still protect your position and reflect what you want to happen next.</p>
          <p>Our role is to help you understand the risks, clarify your intentions, and develop a strategy that can be implemented with the right legal professionals.</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <CredibilityItem>25+ years tax experience</CredibilityItem>
            <CredibilityItem>15+ years financial planning experience</CredibilityItem>
            <CredibilityItem>SAPEPAA-accredited advisor</CredibilityItem>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white/[0.025] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>The plan</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">A clear path from uncertainty to control</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">You do not need to work out the structure yourself. The process gives you a clear sequence: identify the risks, receive the strategy, then decide whether to implement.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <ProcessStep number="1" title="Discovery Meeting">You complete a short survey, then we identify where your assets may be exposed and what you want to happen.</ProcessStep>
            <ProcessStep number="2" title="Personalised Strategy Paper">You receive a clear strategy paper that explains the recommended pathway in plain English.</ProcessStep>
            <ProcessStep number="3" title="Strategy Presentation Meeting">You review the strategy, ask questions, and decide whether to proceed with implementation.</ProcessStep>
          </div>
          <a href="#/process" className="mt-8 inline-flex items-center text-sm font-semibold text-[#6FD7E3] hover:text-[#8FE3EC]">View full process <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
      </section>

      <WhatYouReceiveSection />
      <LeadMagnetSection />
      <Stakes />
      <FAQSection />
      <FinalCTA />
    </PageShell>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      <PageHero label="Services" title="How We Help You Reduce Risk and Stay in Control" body="The right strategy should make your risks, structures, and next steps clear. We help you identify exposure, document your intentions, and coordinate implementation with specialist legal professionals." />
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard icon={ShieldCheck} title="Asset Protection Strategy" subtitle="Reduce exposure to claims, creditors, and legal risk" idealFor="Business owners, professionals, investors, and families with assets exposed to commercial or personal risk." receives="A structured asset protection strategy and a clear implementation pathway.">We identify where control, ownership, guarantees, entities, or documentation may create exposure, then design a strategy to reduce avoidable risk.</ServiceCard>
          <ServiceCard icon={Landmark} title="Succession Planning" subtitle="Control where your assets are intended to go" idealFor="Families, business owners, blended families, and people who want clarity before conflict arises." receives="A succession strategy that documents your intentions and identifies the structures needed to support them.">We help you clarify who should control, receive, or benefit from your assets, then coordinate the legal steps needed to support that outcome.</ServiceCard>
          <ServiceCard icon={Network} title="Trust & Entity Restructuring" subtitle="Review structures that may no longer suit your position" idealFor="People with family trusts, companies, legacy structures, or arrangements created years ago and never properly reviewed." receives="A plain-English review of structural issues and recommended improvements for legal implementation.">We review existing entities and arrangements to identify gaps, outdated documents, control issues, and potential exposure points.</ServiceCard>
          <ServiceCard icon={SearchCheck} title="Risk Review & Strategy" subtitle="Identify hidden risks before they become problems" idealFor="People who are unsure whether their current arrangements are sufficient or who want a second set of eyes." receives="A clear risk review that sets out what is working, what is exposed, and what should be considered next.">We assess your current position, identify practical risks, and give you a clear strategy before you commit to implementation.</ServiceCard>
        </div>
        <div className="mt-10 rounded-3xl border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-8">
          <div className="max-w-3xl">
            <SectionLabel>Supporting services</SectionLabel>
            <h3 className="text-2xl font-semibold text-white">Additional services</h3>
            <p className="mt-4 text-white/70">These services are also available for clients who need practical support with their tax, records, business, finance, or insurance needs.</p>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <SupportingServiceItem title="Accounting & Tax">Accounting and tax services are available for individuals, businesses, trusts, and entities that need ongoing compliance and practical tax support. This may include work connected to family protection trusts, existing structures, or general client needs.</SupportingServiceItem>
            <SupportingServiceItem title="Bookkeeping">Bookkeeping services are available for clients who need accurate records, clearer reporting, and reliable financial information. This can support businesses, trusts, entities, and ongoing compliance work.</SupportingServiceItem>
            <SupportingServiceItem title="Business Advisory">Business advisory support is available for clients who want help understanding performance, cash flow, structure, and practical business decisions. This can be provided as a standalone service or alongside broader strategic work.</SupportingServiceItem>
            <SupportingServiceItem title="Mortgage Broking">Mortgage broking services are available for clients who need help with lending, refinancing, property finance, or debt structuring. This may be relevant to personal, investment, or business-related finance needs.</SupportingServiceItem>
            <SupportingServiceItem title="Personal Insurance">Personal insurance services are available for clients who want to review life, disability, income protection, or business continuity risks. This can help protect income, family stability, and business continuity.</SupportingServiceItem>
            <SupportingServiceItem title="Company Secretarial & ASIC Compliance">Company secretarial and ASIC compliance support is available for companies, family protection trust structures, and business clients. This may include company registers, annual statements, company changes, and director or shareholder updates.</SupportingServiceItem>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <PageHero label="About" title="A Strategy-Led Approach to Asset Protection and Succession" body="Most advice is fragmented — tax, legal, estate planning, insurance, finance, and structures are often handled separately. FWP Advisory exists to help bring the strategy together before implementation begins." />
      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>After decades working across tax, accounting, and financial planning, we have seen a recurring problem: people often have documents, entities, or advice, but no clear strategy connecting them.</p>
            <p>A trust may exist, but control may not be clear. A will may be in place, but the succession pathway may not match the family reality. A business may be growing, but personal and family assets may still carry avoidable exposure.</p>
            <p>FWP Advisory was created to address that gap. The focus is not to sell a product or replace your legal adviser. The focus is to help you understand the risks, clarify what you want to happen, and develop a coordinated strategy that can be implemented with the right professionals.</p>
            <p>With over 25 years in tax and accounting and 15 years in financial planning, we bring a practical understanding of how structures, risk, family intentions, and implementation need to work together.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-8 md:p-10">
            <Handshake className="mb-6 h-9 w-9 text-[#6FD7E3]" />
            <h3 className="text-2xl font-semibold text-white">Strategy-led, not product-led.</h3>
            <p className="mt-4 text-white/70">Our role is to identify the risks, design the strategy, and coordinate the right professionals so implementation is clear and properly managed.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-2xl font-semibold text-white">Credentials</h3>
            <div className="mt-5 grid gap-3">
              <CredibilityItem>25+ years tax and accounting experience</CredibilityItem>
              <CredibilityItem>15+ years financial planning experience</CredibilityItem>
              <CredibilityItem>SAPEPAA-accredited advisor</CredibilityItem>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}

function ProcessPage() {
  return (
    <PageShell>
      <PageHero label="Process" title="A Clear Process Before Implementation Begins" body="The process is designed to help you understand the risks, receive a written strategy, and decide whether implementation is appropriate for your circumstances." />
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <div className="space-y-6">
          <DetailedStep number="1" title="Discovery Meeting">Before we meet, you complete a short survey. In our discovery meeting, we uncover the specific risks to your assets — whether from legal claims, disputes, or unintended outcomes — and clarify exactly what you want to happen.</DetailedStep>
          <DetailedStep number="2" title="Personalised Strategy Paper">Based on your situation, a clear, easy-to-read strategy paper is prepared. It explains the risks, recommended pathway, and structures to consider — without legal jargon.</DetailedStep>
          <DetailedStep number="3" title="Strategy Presentation Meeting">We walk you through the strategy, answer your questions, and where appropriate, outline the implementation pathway and expected costs. There is no obligation to proceed.</DetailedStep>
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell>
      <PageHero label="Contact" title="Start With a Clear Strategy Conversation" body="Book a Discovery Meeting to discuss your situation, your current structures, and whether a strategy paper may be appropriate." />
      <ContactSection />
    </PageShell>
  );
}

function ResourcesPage() {
  const contentTypes = [
    { icon: MessageSquareText, title: "Short Videos", text: "Brief, practical videos explaining asset protection, succession, structures, and family wealth risk in plain English." },
    { icon: Mail, title: "Podcast & Audio", text: "Future audio conversations and short episodes for clients who prefer to listen rather than read." },
    { icon: FileText, title: "Written Guides", text: "Plain-English guides that explain key concepts, risks, and planning issues in more detail." },
    { icon: ClipboardCheck, title: "Downloadable Resources", text: "Checklists, worksheets, and free resources to help you prepare for better conversations." },
    { icon: SearchCheck, title: "Articles", text: "Occasional written articles for deeper explanation, SEO, and practical education." },
  ];

  return (
    <PageShell>
      <PageHero label="Resources" title="Resources to help you understand asset protection, succession, and family wealth risk" body="Practical videos, guides, downloads, audio, and articles for business owners, families, and clients who want to better understand risk, structures, and control." />
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Featured resource</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Start with the family wealth protection guide</h2>
            <p className="mt-5 text-base leading-7 text-white/70">Download the guide if you are interested in asset protection and succession planning, but not ready to book a Discovery Meeting yet.</p>
            <div className="mt-7"><Button href="#/guide" targetSelf>Download Free Guide <ArrowRight className="ml-2 h-4 w-4" /></Button></div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0E1020]/55 p-7">
            <div className="aspect-video rounded-2xl border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-6">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <MessageSquareText className="mb-5 h-10 w-10 text-[#6FD7E3]" />
                <h3 className="text-xl font-semibold text-white">Featured video placeholder</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/60">Future video: 5 asset protection risks business owners and families often miss.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {contentTypes.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <Icon className="mb-5 h-7 w-7 text-[#6FD7E3]" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <div className="mb-5 inline-flex rounded-full border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8FE3EC]">{item.category}</div>
              <h2 className="text-xl font-semibold leading-7 text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/65">{item.summary}</p>
              <button className="mt-6 inline-flex items-center text-sm font-semibold text-[#6FD7E3] hover:text-[#8FE3EC]">Resource placeholder <ArrowRight className="ml-2 h-4 w-4" /></button>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-8">
          <h3 className="text-2xl font-semibold text-white">Future CMS content area</h3>
          <p className="mt-4 text-white/70">In the production website, this section should be connected to a CMS so videos, audio episodes, guides, resources, and articles can be published without changing the website code.</p>
        </div>
      </section>
    </PageShell>
  );
}

function GuidePage() {
  return (
    <PageShell>
      <PageHero label="Free guide" title={leadMagnet.title} body="Download the free guide if you are interested in asset protection and succession planning, but not ready to book a Discovery Meeting yet." />
      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-white">What the guide covers</h2>
          <div className="mt-6 space-y-4 text-white/70">
            <p>• The five key risks to family wealth</p>
            <p>• Why documents alone may not be enough</p>
            <p>• How family protection trust strategies may form part of the discussion</p>
            <p>• Why ownership, control and succession need to be reviewed together</p>
            <p>• A simple net equity worksheet to start the conversation</p>
          </div>
        </div>
        <div className="rounded-3xl border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-white">Download by email</h2>
          <p className="mt-4 text-white/70">Enter your details and receive the free guide. In production, this should connect to your CRM or email marketing platform.</p>
          <form className="mt-7 grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-[#0E1020]/75 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#6FD7E3]" placeholder="First name" />
            <input className="rounded-2xl border border-white/10 bg-[#0E1020]/75 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#6FD7E3]" placeholder="Email address" />
            <label className="flex gap-3 text-sm leading-6 text-white/55">
              <input type="checkbox" className="mt-1" />
              <span>I agree to receive the guide and related communications from FWP Advisory. I understand I can unsubscribe later.</span>
            </label>
            <Button type="submit">Download Free Guide <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </form>
          <p className="mt-5 text-xs leading-5 text-white/45">General information only. Not legal or financial advice.</p>
        </div>
      </section>
    </PageShell>
  );
}

function PageHero({ label, title, body }) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">{title}</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">{body}</p>
      <div className="mt-9"><BookingButton>Book Your Discovery Meeting <ArrowRight className="ml-2 h-4 w-4" /></BookingButton></div>
    </section>
  );
}

function DetailedStep({ number, title, children }) {
  return (
    <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[80px_1fr] md:p-10">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6FD7E3] text-lg font-bold text-[#0E1020]">{number}</div>
      <div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-4 text-lg leading-8 text-white/70">{children}</p>
      </div>
    </div>
  );
}

function Stakes() {
  return (
    <section className="relative z-10 mx-auto grid max-w-7xl gap-6 px-6 py-24 lg:grid-cols-2 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <h3 className="text-2xl font-semibold text-white">Without a plan</h3>
        <div className="mt-6 space-y-4 text-white/70"><p>• Your assets may be exposed to claims or disputes</p><p>• They may not end up where you intended</p><p>• Decisions may be left to others or to chance</p></div>
      </div>
      <div className="rounded-3xl border border-[#6FD7E3]/25 bg-[#6FD7E3]/10 p-8">
        <h3 className="text-2xl font-semibold text-white">With the right plan</h3>
        <div className="mt-6 space-y-4 text-white/78"><p>• Your structures are designed to reduce exposure</p><p>• You stay clearer on who controls what, and when</p><p>• Your intentions are documented before conflict arises</p></div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative z-10 px-6 pb-28 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-10 text-center shadow-2xl shadow-black/20 md:p-14">
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Start With a Clear Strategy Conversation</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Book a Discovery Meeting to understand whether an asset protection and succession strategy is appropriate for your circumstances.</p>
        <div className="mt-9"><BookingButton>Book Your Discovery Meeting <ArrowRight className="ml-2 h-4 w-4" /></BookingButton></div>
      </div>
    </section>
  );
}

function ContactSection({ showForm = false }) {
  return (
    <section className="relative z-10 px-6 pb-28 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-[#6FD7E3]/20 bg-[#6FD7E3]/10 p-8 shadow-2xl shadow-black/20 md:p-10 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[1.5rem] bg-[#0E1020]/60 p-8 md:p-10">
          <SectionLabel>Start the conversation</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight text-white">Book your Discovery Meeting</h2>
          <p className="mt-5 text-white/70">The fastest way to start is to book directly into the calendar.</p>
          <div className="mt-8"><BookingButton>Book Your Discovery Meeting <ArrowRight className="ml-2 h-4 w-4" /></BookingButton></div>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-white">Family Wealth Protection Advisory Pty Ltd</h3>
          <div className="mt-7 space-y-5">
            <a href="mailto:hello@fwpadvisory.com.au" className="flex items-center gap-4 rounded-2xl bg-[#0E1020]/60 p-4 text-white/75 transition hover:bg-[#0E1020] hover:text-white"><Mail className="h-5 w-5 text-[#6FD7E3]" /><span>hello@fwpadvisory.com.au</span></a>
            <a href="tel:+61475219534" className="flex items-center gap-4 rounded-2xl bg-[#0E1020]/60 p-4 text-white/75 transition hover:bg-[#0E1020] hover:text-white"><Phone className="h-5 w-5 text-[#6FD7E3]" /><span>+61 475 219 534</span></a>
            <div className="flex items-center gap-4 rounded-2xl bg-[#0E1020]/60 p-4 text-white/75"><MapPin className="h-5 w-5 text-[#6FD7E3]" /><span>Corporate House, 138 Juliette St, Greenslopes QLD 4120</span></div>
          </div>
          <p className="mt-7 text-sm leading-6 text-white/50">ABN: 73 687 802 722</p>
          <p className="mt-3 text-sm leading-6 text-white/50">General information only. Not legal or financial advice.</p>
        </div>
        
      </div>
    </section>
  );
}

function DisclaimerPage() {
  return (
    <PageShell>
      <PageHero label="Disclaimer" title="General Information Disclaimer" body="This page is a draft website disclaimer for review before publication." />
      <LegalContent>
        <p>The information on this website is general information only. It has not been prepared with your personal objectives, financial situation, family circumstances, asset position, legal position, or needs in mind.</p>
        <p>Family Wealth Protection Advisory Pty Ltd is not a law firm and does not provide legal advice. Any legal advice, legal documents, or legal implementation should be provided by an appropriately qualified legal professional.</p>
        <p>The information on this website is not financial advice, tax advice, accounting advice, or legal advice. Before acting on any information, you should obtain advice from appropriately qualified professionals who can consider your specific circumstances.</p>
        <p>References to asset protection, succession planning, risk reduction, control, or implementation pathways should not be taken as a guarantee that any strategy will prevent claims, disputes, loss, litigation, creditor action, family provision claims, tax consequences, or other adverse outcomes.</p>
        <p>Any strategy discussed with you will depend on your circumstances, applicable law, professional advice, and the proper implementation of any recommended steps.</p>
      </LegalContent>
    </PageShell>
  );
}

function PrivacyPage() {
  return (
    <PageShell>
      <PageHero label="Privacy Policy" title="Privacy Policy" body="This is a draft privacy policy placeholder for the prototype and should be reviewed before publication." />
      <LegalContent>
        <p>Family Wealth Protection Advisory Pty Ltd may collect personal information when you contact us, book a meeting, complete a form, or otherwise provide information to us.</p>
        <p>The types of information collected may include your name, contact details, business details, family or asset-related information you choose to provide, and information relevant to your enquiry.</p>
        <p>Information may be used to respond to enquiries, manage bookings, provide services, prepare strategy work, coordinate with professional advisers where authorised, and maintain business records.</p>
        <p>We may use third-party service providers for booking systems, email, website hosting, analytics, document management, and professional support. These providers may store or process information on our behalf.</p>
        <p>You may contact us at hello@fwpadvisory.com.au to request access to, correction of, or further information about personal information we hold about you.</p>
        <p>This privacy policy should be reviewed and finalised before the website is published.</p>
      </LegalContent>
    </PageShell>
  );
}

function TermsPage() {
  return (
    <PageShell>
      <PageHero label="Terms of Use" title="Website Terms of Use" body="These draft terms are included for prototype purposes and should be reviewed before publication." />
      <LegalContent>
        <p>By using this website, you agree to use it for lawful purposes and in a way that does not interfere with the operation, security, or availability of the website.</p>
        <p>The content on this website is provided for general information only. It may be changed, updated, or removed at any time without notice.</p>
        <p>No client, adviser, legal, financial, tax, or professional relationship is created merely by accessing this website, submitting an enquiry, or booking a meeting.</p>
        <p>External links, including booking links or third-party tools, are provided for convenience. We are not responsible for the content, operation, or privacy practices of third-party websites.</p>
        <p>All website content, branding, copy, layout, and visual elements should be treated as the property of Family Wealth Protection Advisory Pty Ltd or its licensors unless otherwise stated.</p>
        <p>These terms should be reviewed and finalised before the website is published.</p>
      </LegalContent>
    </PageShell>
  );
}

function LegalContent({ children }) {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 pb-28 lg:px-8">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-lg leading-8 text-white/70 md:p-10">
        {children}
      </div>
    </section>
  );
}

export default function FWPWebsitePrototype() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace("#/", "") || "home";
    return [...pages, ...resourcePages, ...legalPages].some((item) => item.id === hash) ? hash : "home";
  };

  const [page, setPage] = useState(getPageFromHash);
  const [mobileOpen, setMobileOpen] = useState(false);

  React.useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash());
      setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const currentPage = {
    home: <HomePage />,
    services: <ServicesPage />,
    about: <AboutPage />,
    process: <ProcessPage />,
    contact: <ContactPage />,
    resources: <ResourcesPage />,
    guide: <GuidePage />,
    disclaimer: <DisclaimerPage />,
    privacy: <PrivacyPage />,
    terms: <TermsPage />,
  }[page];

  return (
    <main className="min-h-screen bg-[#0E1020] font-sans text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6FD7E3]/10 blur-3xl" />
        <div className="absolute right-0 top-[520px] h-[360px] w-[360px] rounded-full bg-[#6FD7E3]/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0E1020]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <LogoMark href="#/home" />
          <nav className="hidden flex-1 items-center justify-center gap-3 text-sm text-white/70 md:flex lg:gap-5 xl:gap-7">
            {pages.map((item) => (
              <a key={item.id} href={`#/${item.id}`} className={`${page === item.id ? "text-[#6FD7E3]" : "hover:text-white"}`}>{item.label}</a>
            ))}
          </nav>
          <div className="hidden shrink-0 md:block"><BookingButton compact /></div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 px-6 pb-5 md:hidden">
            <div className="flex flex-col gap-4 pt-4 text-left text-white/75">
              {pages.map((item) => <a key={item.id} href={`#/${item.id}`} onClick={() => setMobileOpen(false)} className="text-left">{item.label}</a>)}
              <BookingButton>Book Discovery Meeting</BookingButton>
            </div>
          </div>
        )}
      </header>

      {currentPage}

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© Family Wealth Protection Advisory Pty Ltd. ABN 73 687 802 722.</div>
          <div className="flex flex-wrap gap-5">
            <a href="#/disclaimer" className="hover:text-white">Disclaimer</a>
            <a href="#/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#/terms" className="hover:text-white">Terms of Use</a>
            <span>General information only.</span>
            <span>Not legal or financial advice.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
