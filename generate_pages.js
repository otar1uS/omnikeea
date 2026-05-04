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
              Omnikeea provides the technical software infrastructure necessary to deploy this capability globally. Our system operates purely as a technology layer — we do not process funds, hold balances, or act as a merchant of record. All financial operations are managed through your integrated, licensed payment partners.
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
              <p className="lead">Built for scale, security, and maximum performance across all markets.</p>
            </div>
          </div>
          <div className="sec-grid reveal">
            <div className="sec-card">
              <h3>API-First</h3>
              <p>Modern RESTful architecture designed for developer experience and rapid integration.</p>
            </div>
            <div className="sec-card">
              <h3>High Availability</h3>
              <p>Redundant systems ensuring 99.99% uptime for your critical payment flows.</p>
            </div>
            <div className="sec-card">
              <h3>Agnostic Layer</h3>
              <p>Connect with any PSP, acquirer, or alternative payment method seamlessly.</p>
            </div>
            <div className="sec-card">
              <h3>Advanced Routing</h3>
              <p>Intelligent, rules-based engines to optimize approval rates and reduce costs.</p>
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
    eyebrow: 'Products / Orchestration',
    title: 'Payment Orchestration',
    lead: 'Orchestrate your payments, ensuring every transaction performs through intelligent routing and cascading.',
    featureTitle: 'Control your payment flows',
    featureBody: 'Our orchestration engine sequences calls, applies routing rules, manages retries and surfaces operational data — giving your team a clean, observable layer over the entire provider network.'
  },
  {
    path: 'app/product/dynamic-cashier/page.tsx',
    eyebrow: 'Products / Dynamic Cashier',
    title: 'Dynamic Cashier',
    lead: 'Deliver seamless, localised payment experiences tailored to every user and market.',
    featureTitle: 'A smarter checkout experience',
    featureBody: "Present the right payment methods, in the right currency, dynamically based on the user's location and risk profile. Improve conversion rates by offering a frictionless front-end."
  },
  {
    path: 'app/product/white-label/page.tsx',
    eyebrow: 'Products / White Label',
    title: 'White Label Platform',
    lead: "Launch and scale your own payment solutions with Omnikeea's robust infrastructure.",
    featureTitle: 'Your brand, our technology',
    featureBody: 'Deploy a fully branded payment gateway solution for your merchants without the overhead of building it from scratch. We provide the technology, you own the relationship.'
  },
  {
    path: 'app/solution/optimise-payments/page.tsx',
    eyebrow: 'Solutions / Optimise Payments',
    title: 'Optimise Payments Performance',
    lead: 'Increase acceptance rates and mitigate costs across your entire payment ecosystem.',
    featureTitle: 'Maximize every transaction',
    featureBody: 'Leverage our intelligent routing and retry logic to salvage declined transactions, route traffic to the most cost-effective acquirers, and boost your overall bottom line.'
  },
  {
    path: 'app/solution/enhance-infrastructure/page.tsx',
    eyebrow: 'Solutions / Enhance Infrastructure',
    title: 'Enhance Infrastructure',
    lead: 'Build scalable infrastructure for global payment growth.',
    featureTitle: 'Future-proof your tech stack',
    featureBody: 'Replace legacy systems with our modern, API-driven architecture. Easily add new payment providers and methods without touching your core codebase.'
  },
  {
    path: 'app/solution/deliver-experiences/page.tsx',
    eyebrow: 'Solutions / Deliver Experiences',
    title: 'Deliver Frictionless Experiences',
    lead: 'Create fully branded, global payment journeys that convert.',
    featureTitle: 'Remove checkout friction',
    featureBody: 'Offer localized payment methods, localized language support, and localized pricing to ensure customers complete their purchases anywhere in the world.'
  },
  {
    path: 'app/solution/protect-payments/page.tsx',
    eyebrow: 'Solutions / Protect Payments',
    title: 'Protect Payments & Reduce Risk',
    lead: 'Strengthen security and minimise payment risk with advanced technology.',
    featureTitle: 'Secure your operations',
    featureBody: 'Utilize comprehensive risk management rules, 3D Secure workflows, and secure tokenization to protect sensitive data and prevent fraudulent transactions.'
  },
  {
    path: 'app/partners/introducer-program/page.tsx',
    eyebrow: 'Partners / Introducer Program',
    title: 'Introducer Program',
    lead: 'Refer merchants and unlock new revenue opportunities with Omnikeea.',
    featureTitle: 'Grow alongside us',
    featureBody: 'Join our network of trusted introducers. Connect your network with our advanced technical payment infrastructure and earn recurring rewards for every successful integration.'
  }
];

for (const p of pages) {
  fs.writeFileSync(p.path, pageTemplate(p.eyebrow, p.title, p.lead, p.featureTitle, p.featureBody));
}

console.log("Generated 8 distinct pages.");
