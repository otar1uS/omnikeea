import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Our Product',
  description:
    'Omnikeea’s product family — Orchestration, Dynamic Cashier and White Label — software that connects e-commerce businesses with their licensed payment partners.',
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title={<>A modern <span className="grad">product family</span> for e-commerce payments</>}
        lead="Explore Omnikeea’s comprehensive software platform — Orchestration, Dynamic Cashier and White Label — built to optimise performance and scale globally."
      />

      <section className="section-pad">
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">Our Products</div>
              <h2 className="h2">Three building blocks</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                One integration unlocks a full product family. Each module is delivered as software functionality you can configure, observe and scale across regions.
              </p>
            </div>
          </div>

          <div className="modules-grid reveal">
            {[
              {
                title: 'Orchestration',
                body: 'Orchestrate your payments, ensuring every transaction performs. A single technical layer that sequences provider workflows across your licensed partner network.',
                d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
              },
              {
                title: 'Dynamic Cashier',
                body: 'Deliver seamless, localised payment experiences. Configurable, region-aware checkout flows that present the right options to the right customer.',
                d: 'M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm2 10h4',
              },
              {
                title: 'White Label',
                body: 'Launch and scale your own payment solutions with Omnikeea. A fully brandable software platform that lets your team ship payments under your own name.',
                d: 'M3 7h18M3 12h18M3 17h12',
              },
            ].map((m) => (
              <div className="mod-card" key={m.title}>
                <div className="mod-icon">
                  <svg viewBox="0 0 24 24"><path d={m.d} /></svg>
                </div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">Inside Orchestration</div>
              <h2 className="h2">Orchestrate provider workflows at scale</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                One integration. Every licensed partner. Our orchestration engine sequences calls, applies routing rules, manages retries and surfaces operational data — giving your team a clean, observable layer over the entire provider network.
              </p>
            </div>
          </div>

          <div className="modules-grid reveal">
            {[
              {
                title: 'Unified API connectivity',
                body: 'A single integration that connects you to multiple licensed PSPs and financial platforms via clean REST and webhook interfaces.',
                d: 'M8 9l3 3-3 3M13 15h3M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z',
              },
              {
                title: 'Routing logic',
                body: 'Define, version and deploy routing rules across providers and regions. Configurable, observable and reversible — no engineering rebuild required.',
                d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
              },
              {
                title: 'Retry & fallback',
                body: 'Automatic, retry-safe sequencing across licensed partners. Workflows continue gracefully when a provider is unavailable.',
                d: 'M4 4v5h5M20 20v-5h-5M5 9a7 7 0 0111-3M19 15a7 7 0 01-11 3',
              },
              {
                title: 'Operational visibility',
                body: 'Real-time dashboards, structured logs and reporting so your operations team can see exactly what is happening across every provider.',
                d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
              },
              {
                title: 'Behavioral analytics',
                body: 'Surface anomalies and pattern data through powerful technical analytics — turning raw integration signals into useful operational insight.',
                d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Data exchange layer',
                body: 'Secure system-to-system communication enabling reliable, structured information flows between merchant, orchestrator and licensed partner.',
                d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
              },
            ].map((m) => (
              <div className="mod-card" key={m.title}>
                <div className="mod-icon">
                  <svg viewBox="0 0 24 24"><path d={m.d} /></svg>
                </div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>

          <div className="mod-disclaimer reveal">
            <div>
              <strong>How it fits together:</strong> Omnikeea provides the orchestration software; financial operations run through your licensed payment partners.
            </div>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Talk to us"
        title={<>Ready to plug in <span className="grad">one orchestration layer?</span></>}
        body="Connect with our technical team to discuss integration, routing rules and rollout."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/solution"
        secondaryLabel="See solutions →"
      />
    </>
  );
}
