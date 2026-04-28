import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'E-commerce verticals served by the Omnikeea technical layer.',
};

const INDUSTRIES = [
  { tag: 'D2C', h: 'Direct-to-Consumer Brands',
    p: 'Plug your storefront into licensed payment partners through one API surface — no per-provider maintenance overhead.',
    list: ['Single-API integration', 'Storefront-grade dashboards', 'Configuration-driven rollouts'],
    d: 'M4 7h16v10H4z M4 7l8 6 8-6' },
  { tag: 'Marketplaces', h: 'Multi-Vendor Platforms',
    p: 'Orchestrate split-flow workflows across many vendors and licensed partners with consistent operational tooling.',
    list: ['Per-vendor routing logic', 'Tiered access controls', 'Audit-grade event trails'],
    d: 'M3 12h18M3 6h18M3 18h18' },
  { tag: 'Subscription', h: 'Recurring & SaaS Businesses',
    p: 'Automate retry, dunning, and renewal logic in software while keeping the actual money movement on regulated rails.',
    list: ['Retry & cadence engine', 'Lifecycle event hooks', 'Per-cohort analytics'],
    d: 'M12 8v4l3 2 M21 12a9 9 0 1 1-3-6.7' },
  { tag: 'Cross-Border', h: 'Global Merchants',
    p: 'Route through region-appropriate licensed partners and adapt provider mix to local market conditions in configuration.',
    list: ['Region-aware routing', 'Currency & locale rules', 'Sanctions-aware enforcement'],
    d: 'M12 2v20 M2 12h20 M5 5l14 14 M19 5L5 19' },
  { tag: 'Digital Goods', h: 'Software & Digital Products',
    p: 'Lightweight integrations for fast-moving digital catalogs — built for high-volume, low-latency operational paths.',
    list: ['Streaming webhook updates', 'Tokenised user identifiers', 'Edge-cacheable read paths'],
    d: 'M4 4h16v16H4z M9 9h6v6H9z' },
  { tag: 'High-Velocity', h: 'High-Velocity E-Commerce',
    p: 'Built for sustained traffic with idempotent endpoints, deep observability, and provider failover under load.',
    list: ['Idempotent everything', 'Backpressure-aware queues', 'Circuit-breaker provider sets'],
    d: 'M13 2L3 14h7l-1 8 11-12h-7l1-8z' },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Built for the <span className="grad">shape of e-commerce</span></>}
        lead="From a first storefront integration to multi-region marketplace orchestration — the platform plugs into the operational reality of online business."
      />

      <section className="section-pad">
        <div className="container">
          <div className="ind-grid">
            {INDUSTRIES.map((i) => (
              <div className="ind-card reveal" key={i.h}>
                <div className="ind-icon">
                  <svg viewBox="0 0 24 24"><path d={i.d} /></svg>
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: 12 }}>{i.tag}</div>
                <h3>{i.h}</h3>
                <p>{i.p}</p>
                <ul>
                  {i.list.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Your vertical?"
        title={<>Don't see your <span className="grad">exact use case?</span></>}
        body="The platform is configuration-driven by design. Tell us how your operation works and we'll map it to the right modules."
        primaryHref="/contact"
        primaryLabel="Talk to Us"
        secondaryHref="/solutions"
        secondaryLabel="View Modules →"
      />
    </>
  );
}
