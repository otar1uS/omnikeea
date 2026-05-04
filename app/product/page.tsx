import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Our Product',
  description:
    'Omnikeea’s product family — Orchestration, Dynamic Cashier and White Label — software that connects e-commerce businesses with their licensed payment partners.',
};

const family = [
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
];

const features = [
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
];

const steps = [
  { n: '01', title: 'Connect once', body: 'Integrate the Omnikeea API into your e-commerce platform with a single technical onboarding.' },
  { n: '02', title: 'Configure providers', body: 'Map your existing licensed payment partners into the orchestration layer — no rebuild required.' },
  { n: '03', title: 'Deploy routing rules', body: 'Define how transactions flow across providers, regions and conditions through versioned, reversible configuration.' },
  { n: '04', title: 'Observe and iterate', body: 'Monitor performance in real time, adjust rules and ship improvements without re-engineering integrations.' },
];

const cases = [
  { tag: 'E-commerce', title: 'Cross-border merchants', body: 'Route transactions intelligently across regions and licensed partners to lift acceptance.' },
  { tag: 'E-commerce', title: 'High-volume retail', body: 'Handle peak load with retry logic and provider fallback engineered for reliability.' },
  { tag: 'E-commerce', title: 'Marketplaces', body: 'Layer orchestration over multi-merchant flows with structured data exchange between parties.' },
  { tag: 'E-commerce', title: 'Subscription commerce', body: 'Optimise recurring billing through smart routing and granular operational visibility.' },
];

const faqs = [
  { q: 'What does Omnikeea actually do?', a: 'Omnikeea provides software infrastructure — an orchestration layer, dynamic cashier and white-label tooling — that sits between your e-commerce platform and the licensed payment institutions you work with.' },
  { q: 'Do I need to replace my existing payment providers?', a: 'No. Omnikeea is designed to sit on top of the licensed partners you already work with, sequencing workflows and adding orchestration capabilities without forcing migration.' },
  { q: 'How long does integration take?', a: 'A single API integration is enough to unlock the full product family. Most teams reach a production-ready integration within a few weeks of technical onboarding.' },
  { q: 'Is the platform global?', a: 'Yes — Omnikeea operates globally, with the exception of a small number of restricted territories listed in our footer.' },
  { q: 'How do you work with licensed partners?', a: 'We provide the technical integration and orchestration software; licensed financial institutions handle the regulated financial operations within the flow.' },
];

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
              <div className="eyebrow">The product family</div>
              <h2 className="h2">Three building blocks. One integration.</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                Each module is delivered as software functionality you can configure, observe and scale across regions — connected through one technical layer to your licensed partner network.
              </p>
            </div>
          </div>

          <div className="modules-grid reveal">
            {family.map((m) => (
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

      <section className="modules-section">
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
            {features.map((m) => (
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

      <section className="how-section">
        <div className="how-orb" />
        <div className="container">
          <div className="how-head reveal">
            <div className="eyebrow">How it works</div>
            <h2 className="h2">From integration to optimisation</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A clean technical journey: one connection, configurable rules and a live operational view across every provider you work with.
            </p>
          </div>

          <div className="how-grid reveal">
            {steps.map((s) => (
              <div className="how-step" key={s.n}>
                <div className="how-step-num">STEP {s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="framework-section">
        <div className="framework-orb" />
        <div className="container">
          <div className="framework-grid">
            <div className="reveal">
              <div className="eyebrow">How it fits together</div>
              <h2 className="h2" style={{ marginBottom: 20 }}>A clean software layer between merchants and licensed partners</h2>
              <p className="lead" style={{ marginBottom: 24 }}>
                Omnikeea provides the orchestration software. Financial operations are carried out by your licensed payment partners — clearly separated, cleanly integrated.
              </p>
              <div className="framework-steps">
                <div className="fw-step">
                  <div className="fw-step-num">01</div>
                  <div className="fw-step-content">
                    <h4>Merchants integrate once</h4>
                    <p>Your e-commerce platform connects to a single Omnikeea API to access the full product family.</p>
                  </div>
                </div>
                <div className="fw-step">
                  <div className="fw-step-num">02</div>
                  <div className="fw-step-content">
                    <h4>Omnikeea orchestrates</h4>
                    <p>Routing logic, retries, observability and data exchange run in our software layer.</p>
                  </div>
                </div>
                <div className="fw-step">
                  <div className="fw-step-num">03</div>
                  <div className="fw-step-content">
                    <h4>Licensed partners execute</h4>
                    <p>Regulated financial operations are handled by the licensed payment institutions in your network.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="resp-diagram reveal">
              <div className="resp-title">Responsibility model</div>
              <div className="resp-layer merchant">
                <div className="resp-layer-tag">Merchant</div>
                <div className="resp-layer-name">E-commerce platform</div>
                <div className="resp-layer-desc">Owns the customer relationship and commerce experience.</div>
              </div>
              <div className="resp-arrow">↓</div>
              <div className="resp-layer omni">
                <div className="resp-layer-tag">Omnikeea</div>
                <div className="resp-layer-name">Software & orchestration</div>
                <div className="resp-layer-desc">Provides API connectivity, routing, observability and data exchange.</div>
              </div>
              <div className="resp-arrow">↓</div>
              <div className="resp-layer licensed">
                <div className="resp-layer-tag">Licensed partner</div>
                <div className="resp-layer-name">Regulated financial operations</div>
                <div className="resp-layer-desc">Authorised institutions execute the regulated payment activity.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cases-section">
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">Where it fits</div>
              <h2 className="h2">Built for e-commerce operators</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                Whether you sell across borders, run a marketplace or scale subscription commerce — the orchestration layer adapts to the shape of your business.
              </p>
            </div>
          </div>

          <div className="cases-grid reveal">
            {cases.map((c) => (
              <div className="case-card" key={c.title}>
                <div className="case-tag">{c.tag}</div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="how-head reveal">
            <div className="eyebrow">Frequently asked</div>
            <h2 className="h2">What teams ask before integrating</h2>
          </div>
          <div className="faq-grid reveal">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq-body">{f.a}</div>
              </details>
            ))}
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
