import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Our Product',
  description:
    'Omnikeea’s product family — Integration Layer, Dynamic Cashier and White Label — software that helps e-commerce businesses integrate with their licensed third-party service providers.',
};

const family = [
  {
    title: 'Integration Layer',
    body: 'A unified integration layer for managing connections with licensed third-party service providers. A single technical layer that coordinates technical workflows across your licensed partner network.',
    d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    title: 'Dynamic Cashier',
    body: 'Deliver seamless, localised checkout experiences. Configurable, region-aware checkout flows that present the right options to the right customer.',
    d: 'M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm2 10h4',
  },
  {
    title: 'White Label',
    body: 'Launch and scale your own branded technology platform with Omnikeea. A fully brandable software toolkit that lets your team ship integration tooling under your own name.',
    d: 'M3 7h18M3 12h18M3 17h12',
  },
];

const features = [
  {
    title: 'Unified API integration',
    body: 'A single technical integration that connects you to multiple licensed third-party service providers via clean REST and webhook interfaces.',
    d: 'M8 9l3 3-3 3M13 15h3M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z',
  },
  {
    title: 'Configurable workflow rules',
    body: 'Define, version and deploy integration rules across providers and regions. Configurable, observable and reversible — no engineering rebuild required.',
    d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    title: 'Retry & fallback',
    body: 'Automatic, retry-safe sequencing across licensed third-party providers. Technical workflows continue gracefully when a provider is unavailable.',
    d: 'M4 4v5h5M20 20v-5h-5M5 9a7 7 0 0111-3M19 15a7 7 0 01-11 3',
  },
  {
    title: 'Operational visibility',
    body: 'Real-time operational dashboards, structured logs and reporting so your operations team can see exactly what is happening across every integration.',
    d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'System-behaviour analytics',
    body: 'Surface anomalies and pattern data through technical analytics — turning raw integration signals into useful operational insight for performance optimisation.',
    d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Data-exchange components',
    body: 'Secure system-to-system communication enabling reliable, structured information flows between your platform, the integration layer and licensed third-party providers.',
    d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
];

const steps = [
  { n: '01', title: 'Connect once', body: 'Integrate the Omnikeea API into your e-commerce platform with a single technical onboarding.' },
  { n: '02', title: 'Configure providers', body: 'Map your existing licensed third-party service providers into the integration layer — no rebuild required.' },
  { n: '03', title: 'Deploy integration rules', body: 'Define how technical workflows move across providers, regions and conditions through versioned, reversible configuration.' },
  { n: '04', title: 'Observe and iterate', body: 'Monitor technical performance in real time, adjust rules and ship improvements without re-engineering integrations.' },
];

const cases = [
  { tag: 'E-commerce', title: 'Cross-border merchants', body: 'Coordinate technical workflows across regions and licensed third-party providers to improve operational reliability.' },
  { tag: 'E-commerce', title: 'High-volume retail', body: 'Handle peak load with retry logic and provider fallback engineered for reliability.' },
  { tag: 'E-commerce', title: 'Marketplaces', body: 'Layer the integration layer over multi-merchant flows with structured data exchange between parties.' },
  { tag: 'E-commerce', title: 'Subscription commerce', body: 'Optimise recurring integration flows through configurable rules and granular operational visibility.' },
];

const faqs = [
  { q: 'What does Omnikeea actually do?', a: 'Omnikeea provides software infrastructure — an integration layer, dynamic cashier and white-label tooling — that sits between your e-commerce platform and the licensed third-party service providers you work with. We do not process, store, transmit or handle financial transactions.' },
  { q: 'Do I need to replace my existing service providers?', a: 'No. Omnikeea is designed to sit alongside the licensed third-party providers you already work with, coordinating technical workflows and adding integration capabilities without forcing migration.' },
  { q: 'How long does integration take?', a: 'A single API integration is enough to unlock the full product family. Most teams reach a production-ready integration within a few weeks of technical onboarding.' },
  { q: 'Is the platform global?', a: 'Yes — Omnikeea operates globally, with the exception of a small number of restricted territories listed in our footer.' },
  { q: 'How do you work with licensed partners?', a: 'We provide the technical integration software; all regulated financial operations are performed exclusively by licensed third-party institutions.' },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title={<>A modern <span className="grad">product family</span> for e-commerce integrations</>}
        lead="Explore Omnikeea’s integration technology platform — the Integration Layer, Dynamic Cashier and White Label — built to optimise technical performance and scale globally."
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
                Each module is delivered as software functionality you can configure, observe and scale across regions — connected through one technical layer to your licensed third-party provider network.
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
              <div className="eyebrow">Inside the Integration Layer</div>
              <h2 className="h2">Coordinate technical workflows at scale</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                One integration. Every licensed third-party provider. Our integration layer sequences technical calls, applies configurable rules, manages retries and surfaces operational data — giving your team a clean, observable layer over the entire provider network.
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
              <h2 className="h2" style={{ marginBottom: 20 }}>A clean software layer between merchants and licensed third-party providers</h2>
              <p className="lead" style={{ marginBottom: 24 }}>
                Omnikeea provides the integration software. All regulated financial operations are performed exclusively by your licensed third-party providers — clearly separated, cleanly integrated.
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
                    <h4>Omnikeea coordinates technical workflows</h4>
                    <p>Configurable rules, retries, observability and data exchange run in our software layer.</p>
                  </div>
                </div>
                <div className="fw-step">
                  <div className="fw-step-num">03</div>
                  <div className="fw-step-content">
                    <h4>Licensed third-party providers execute</h4>
                    <p>All regulated financial operations are handled exclusively by the licensed institutions in your network.</p>
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
                <div className="resp-layer-name">Software & integration layer</div>
                <div className="resp-layer-desc">Provides API integration, configurable workflow rules, observability and data exchange.</div>
              </div>
              <div className="resp-arrow">↓</div>
              <div className="resp-layer licensed">
                <div className="resp-layer-tag">Licensed third-party provider</div>
                <div className="resp-layer-name">Regulated financial operations</div>
                <div className="resp-layer-desc">Licensed third-party institutions perform all regulated financial activity.</div>
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
                Whether you sell across borders, run a marketplace or scale subscription commerce — the integration layer adapts to the shape of your business.
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
        title={<>Ready to plug in <span className="grad">one integration layer?</span></>}
        body="Connect with our technical team to discuss integration, configurable rules and rollout."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/solution"
        secondaryLabel="See solutions →"
      />
    </>
  );
}
