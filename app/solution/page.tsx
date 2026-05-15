import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Solve complex integration challenges with software solutions designed to optimise technical performance, strengthen infrastructure and deliver seamless, secure global experiences.',
};

const solutions = [
  {
    title: 'Optimise integration performance',
    short: 'Improve technical performance and reduce operational overhead',
    body: 'Improve technical performance and reduce operational overhead through configurable workflow rules across your licensed third-party providers — designed to get more out of every integration you already maintain.',
    d: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  },
  {
    title: 'Enhance infrastructure',
    short: 'Build scalable infrastructure for global integration growth',
    body: 'Build scalable IT infrastructure for global integration growth. Modular, API-first architecture engineered for reliability, observability and rapid iteration.',
    d: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    title: 'Deliver frictionless global experiences',
    short: 'Create fully branded, global checkout journeys',
    body: 'Create fully branded, global checkout journeys. Localisation, configuration and operational tooling delivered as a clean software layer your team can ship fast.',
    d: 'M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9-9v18M3 12h18',
  },
  {
    title: 'Protect platforms and reduce technical risk',
    short: 'Strengthen security and improve system reliability',
    body: 'Strengthen security and improve system reliability with system-behaviour analytics and structured data exchange — surfacing useful signals across the integration to your team and your licensed third-party providers.',
    d: 'M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z',
  },
];

const levers = [
  { title: 'Smarter sequencing', body: 'Sequence technical workflows so each call follows the path most likely to succeed across your licensed third-party network.', d: 'M3 12h6l3-9 3 18 3-9h3' },
  { title: 'Versioned configuration rules', body: 'Define, version and roll back integration rules without engineering rebuilds — react to performance signals fast.', d: 'M4 4v5h5M20 20v-5h-5M5 9a7 7 0 0111-3M19 15a7 7 0 01-11 3' },
  { title: 'Retry-safe fallback', body: 'When a provider is unavailable, technical workflows continue gracefully through configured fallbacks — designed for reliability at peak load.', d: 'M12 6V2m0 4a6 6 0 100 12 6 6 0 000-12zm0 12v4' },
  { title: 'Operational visibility', body: 'Real-time operational dashboards and structured logs give your operations team a clear, live view of every integration and every workflow.', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { title: 'System-behaviour analytics', body: 'Surface anomalies and patterns through technical analytics — turning raw signals into actionable operational insight.', d: 'M3 3v18h18M7 14l4-4 4 4 5-5' },
  { title: 'Structured data exchange', body: 'Secure system-to-system communication keeps merchant, integration layer and licensed third-party provider data flowing reliably.', d: 'M4 7h16M4 12h16M4 17h10' },
];

const steps = [
  { n: '01', title: 'Diagnose', body: 'We review your current integration, provider mix and where technical performance leaks happen today.' },
  { n: '02', title: 'Design', body: 'Map integration logic, configurable rules and observability to your e-commerce shape.' },
  { n: '03', title: 'Deploy', body: 'Ship the technical layer through a clean integration alongside your licensed third-party providers.' },
  { n: '04', title: 'Iterate', body: 'Use live data to refine rules, surface insight and keep technical performance compounding.' },
];

const faqs = [
  { q: 'How does Omnikeea improve technical performance?', a: 'By coordinating technical workflows intelligently — sequencing calls, applying configurable rules and using fallbacks — Omnikeea helps you get more out of the licensed third-party providers you already work with.' },
  { q: 'Will this disrupt my existing provider setup?', a: 'No. Omnikeea is designed to sit alongside the licensed third-party providers you already use, layering integration tooling over them rather than replacing them.' },
  { q: 'Is the solution suitable for global e-commerce?', a: 'Yes — Omnikeea operates globally, excluding a small number of restricted territories listed in our footer, and is built for region-aware checkout journeys.' },
  { q: 'What does "protect platforms" actually mean here?', a: 'It refers to the technical signals and data exchange we surface across the integration — useful for your team and the licensed third-party providers who carry out the regulated risk operations.' },
];

export default function SolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Solve complex challenges with <span className="grad">software-first</span> solutions</>}
        lead="Solutions designed to optimise technical performance, strengthen infrastructure and deliver seamless, secure global experiences — built around your integration with licensed third-party financial service providers."
      />

      <section className="section-pad">
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">What we solve</div>
              <h2 className="h2">Built for e-commerce growth</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                Every solution is delivered as software you can integrate, configure and scale — sitting cleanly alongside the licensed third-party providers in your stack.
              </p>
            </div>
          </div>

          <div className="modules-grid reveal">
            {solutions.map((s) => (
              <div className="mod-card" key={s.title}>
                <div className="mod-icon">
                  <svg viewBox="0 0 24 24"><path d={s.d} /></svg>
                </div>
                <h3>{s.title}</h3>
                <p style={{ fontWeight: 500, marginBottom: 8 }}>{s.short}</p>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-num accent">1</div>
              <div className="stat-label">integration to reach the full product family</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">N+</div>
              <div className="stat-label">licensed third-party providers integrated through one layer</div>
            </div>
            <div className="stat-box">
              <div className="stat-num accent">24/7</div>
              <div className="stat-label">operational visibility across every integration</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">API</div>
              <div className="stat-label">first-class developer experience, end to end</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-section">
        <div className="container">
          <div className="sec-head">
            <div className="reveal">
              <div className="eyebrow">Inside the solution</div>
              <h2 className="h2">The technical levers we use to optimise integrations</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                Each lever is a software capability — composable, configurable, and engineered to lift technical performance across the licensed third-party providers already in your stack.
              </p>
            </div>
          </div>

          <div className="sec-grid reveal">
            {levers.map((l) => (
              <div className="sec-card" key={l.title}>
                <div className="sec-icon">
                  <svg viewBox="0 0 24 24"><path d={l.d} /></svg>
                </div>
                <h4>{l.title}</h4>
                <p>{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="how-orb" />
        <div className="container">
          <div className="how-head reveal">
            <div className="eyebrow">How we deliver</div>
            <h2 className="h2">From diagnosis to compounding gains</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A focused engagement that gets the integration layer live quickly and keeps it improving with real operational data.
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

          <div className="mod-disclaimer reveal" style={{ marginTop: 60 }}>
            <div>
              <strong>How we work with partners:</strong> we provide the technical integration and infrastructure; we do not process, store, transmit or handle financial transactions. All regulated financial operations are performed exclusively by licensed third-party institutions.
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="how-head reveal">
            <div className="eyebrow">Frequently asked</div>
            <h2 className="h2">Common questions from e-commerce teams</h2>
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
        eyebrow="Get started"
        title={<>Tell us what you want to <span className="grad">optimise.</span></>}
        body="Our technical team will walk you through how Omnikeea can support your e-commerce integration."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/product"
        secondaryLabel="View product →"
      />
    </>
  );
}
