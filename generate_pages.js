// One-time scaffold script. Already executed; the generated .tsx files have
// since been edited by hand for compliance-safe wording. Templates here have
// been updated to mirror the current compliance-safe baseline so that
// accidental re-execution will not reintroduce regulated-sounding language.
const fs = require('fs');

const pageTemplate = (eyebrow, title, lead, featureTitle, featureBody) => `import PageHero from '@/components/PageHero';
import Link from 'next/link';

export default function SubPage() {
  return (
    <>
      <PageHero
        eyebrow="${eyebrow}"
        title={<><span className="grad">${title}</span></>}
        lead="${lead}"
      />

      <section className="section-pad">
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">Overview</div>
              <h2 className="h2">${featureTitle}</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                ${featureBody}
              </p>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: 60, padding: 40, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 16 }}>
            <h3 style={{ fontFamily: 'var(--ff-head)', fontSize: 24, marginBottom: 16 }}>Technical implementation</h3>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 24 }}>
              Omnikeea provides the technical software infrastructure necessary to deploy this capability globally. Our system operates purely as a technology layer — we do not process, store, transmit or handle financial transactions, hold balances, or act as a merchant of record. All regulated financial operations are performed exclusively by your licensed third-party providers.
            </p>
            <Link href="/contact" className="btn btn-primary">Discuss Integration</Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg1)' }}>
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <h2 className="h2">Why choose Omnikeea?</h2>
            </div>
            <div>
              <p className="lead">Built for scale, security, and maximum technical performance across all markets.</p>
            </div>
          </div>
          <div className="sec-grid reveal">
            <div className="sec-card">
              <h3>API-First</h3>
              <p>Modern RESTful architecture designed for developer experience and rapid integration.</p>
            </div>
            <div className="sec-card">
              <h3>High Availability</h3>
              <p>Redundant systems ensuring 99.99% uptime for your critical integration workflows.</p>
            </div>
            <div className="sec-card">
              <h3>Agnostic Layer</h3>
              <p>Connect with any licensed third-party service provider through a single technical interface.</p>
            </div>
            <div className="sec-card">
              <h3>Configurable Workflow Rules</h3>
              <p>Configurable, rules-based engines to optimise technical performance and reduce operational overhead.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
`;

const pages = [
  {
    path: 'app/product/orchestration/page.tsx',
    eyebrow: 'Products / Integration Layer',
    title: 'Unified Integration Layer',
    lead: 'A unified integration layer for managing connections with licensed third-party providers — coordinated through configurable technical workflows.',
    featureTitle: 'Coordinate your integration workflows',
    featureBody: 'Our integration layer sequences technical calls, applies configurable rules, manages retries and surfaces operational data — giving your team a clean, observable layer over the entire licensed third-party provider network.'
  },
  {
    path: 'app/product/dynamic-cashier/page.tsx',
    eyebrow: 'Products / Dynamic Cashier',
    title: 'Dynamic Cashier',
    lead: 'Deliver seamless, localised checkout experiences tailored to every user and market.',
    featureTitle: 'A smarter checkout experience',
    featureBody: "Display the right options, in the right currency, dynamically based on the user's location and configuration profile. Improve conversion through a frictionless front-end — all options are provided and operated by your licensed third-party providers."
  },
  {
    path: 'app/product/white-label/page.tsx',
    eyebrow: 'Products / White Label',
    title: 'White Label Platform',
    lead: "Launch and scale your own branded integration technology platform with Omnikeea's robust software infrastructure.",
    featureTitle: 'Your brand, our technology',
    featureBody: 'Deploy a fully branded technology toolkit for your customers without the overhead of building it from scratch. We provide the software, you own the relationship — all regulated financial operations remain with your licensed third-party providers.'
  },
  {
    path: 'app/solution/optimise-payments/page.tsx',
    eyebrow: 'Solutions / Optimise Integrations',
    title: 'Optimise Integration Performance',
    lead: 'Improve technical performance and reduce operational overhead across your entire integration network.',
    featureTitle: 'Get more from every integration',
    featureBody: 'Leverage our configurable workflow rules and retry logic to recover failed technical calls, direct traffic to the most reliable licensed third-party providers, and improve overall integration performance.'
  },
  {
    path: 'app/solution/enhance-infrastructure/page.tsx',
    eyebrow: 'Solutions / Enhance Infrastructure',
    title: 'Enhance Infrastructure',
    lead: 'Build scalable infrastructure for global integration growth.',
    featureTitle: 'Future-proof your tech stack',
    featureBody: 'Replace legacy systems with our modern, API-driven architecture. Easily add new licensed third-party providers and integration methods without touching your core codebase.'
  },
  {
    path: 'app/solution/deliver-experiences/page.tsx',
    eyebrow: 'Solutions / Deliver Experiences',
    title: 'Deliver Frictionless Experiences',
    lead: 'Create fully branded, global checkout journeys that convert.',
    featureTitle: 'Remove checkout friction',
    featureBody: 'Display localised options, localised language support, and localised pricing through configurable interfaces to ensure customers can complete their journey anywhere in the world.'
  },
  {
    path: 'app/solution/protect-payments/page.tsx',
    eyebrow: 'Solutions / Protect Platforms',
    title: 'Protect Platforms & Reduce Technical Risk',
    lead: 'Strengthen security and improve system reliability with advanced integration technology.',
    featureTitle: 'Secure your integrations',
    featureBody: 'Use system-behaviour analytics, structured data exchange and configurable workflow rules to surface anomalies and operational signals — fed back to your team and your licensed third-party providers, who handle all regulated risk activity.'
  },
  {
    path: 'app/partners/introducer-program/page.tsx',
    eyebrow: 'Partners / Introducer Program',
    title: 'Introducer Program',
    lead: 'Refer merchants and unlock new revenue opportunities with Omnikeea.',
    featureTitle: 'Grow alongside us',
    featureBody: 'Join our network of trusted introducers. Connect your network with our advanced integration technology and earn recurring rewards for every successful integration.'
  }
];

for (const p of pages) {
  fs.writeFileSync(p.path, pageTemplate(p.eyebrow, p.title, p.lead, p.featureTitle, p.featureBody));
}

console.log("Generated 8 distinct pages.");
