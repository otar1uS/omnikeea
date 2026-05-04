import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Solve complex payment challenges with software solutions designed to optimise performance, strengthen infrastructure and deliver seamless, secure global experiences.',
};

const solutions = [
  {
    title: 'Optimise payments performance',
    short: 'Increase acceptance rates and mitigate costs',
    body: 'Improve acceptance rates and mitigate operational cost through smarter technical orchestration of provider workflows — designed to get more out of every provider you already work with.',
    d: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  },
  {
    title: 'Enhance infrastructure',
    short: 'Build scalable infrastructure for global payment growth',
    body: 'Build scalable IT infrastructure for global payment growth. Modular, API-first architecture engineered for reliability, observability and rapid iteration.',
    d: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    title: 'Deliver frictionless global payment experiences',
    short: 'Create fully branded, global payment journeys',
    body: 'Create fully branded, global payment journeys. Localisation, configuration and merchant tooling delivered as a clean software layer your team can ship fast.',
    d: 'M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9-9v18M3 12h18',
  },
  {
    title: 'Protect payments and reduce risk',
    short: 'Strengthen security and minimise payment risk',
    body: 'Strengthen security and minimise payment risk with behavioural analytics and structured data exchange — surfacing useful signals across the integration to your team and your licensed partners.',
    d: 'M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z',
  },
];

const levers = [
  { title: 'Smarter sequencing', body: 'Sequence provider workflows so each transaction follows the path most likely to succeed across your licensed network.', d: 'M3 12h6l3-9 3 18 3-9h3' },
  { title: 'Versioned routing rules', body: 'Define, version and roll back routing rules without engineering rebuilds — react to performance signals fast.', d: 'M4 4v5h5M20 20v-5h-5M5 9a7 7 0 0111-3M19 15a7 7 0 01-11 3' },
  { title: 'Retry-safe fallback', body: 'When a provider is unavailable, workflows continue gracefully through configured fallbacks — designed for reliability at peak load.', d: 'M12 6V2m0 4a6 6 0 100 12 6 6 0 000-12zm0 12v4' },
  { title: 'Operational visibility', body: 'Real-time dashboards and structured logs give your operations team a clear, live view of every provider and every workflow.', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { title: 'Behavioural analytics', body: 'Surface anomalies and patterns through technical analytics — turning raw signals into actionable operational insight.', d: 'M3 3v18h18M7 14l4-4 4 4 5-5' },
  { title: 'Structured data exchange', body: 'Secure system-to-system communication keeps merchant, orchestrator and licensed partner data flowing reliably.', d: 'M4 7h16M4 12h16M4 17h10' },
];

const steps = [
  { n: '01', title: 'Diagnose', body: 'We review your current integration, provider mix and where performance leaks happen today.' },
  { n: '02', title: 'Design', body: 'Map orchestration logic, routing rules and observability to your e-commerce shape.' },
  { n: '03', title: 'Deploy', body: 'Ship the technical layer through a clean integration alongside your licensed partners.' },
  { n: '04', title: 'Iterate', body: 'Use live data to refine rules, surface insight and keep performance compounding.' },
];

const faqs = [
  { q: 'How does Omnikeea improve acceptance rates?', a: 'By orchestrating provider workflows intelligently — sequencing calls, applying routing rules and using fallbacks — Omnikeea helps you get more out of the licensed partners you already work with.' },
  { q: 'Will this disrupt my existing provider setup?', a: 'No. Omnikeea is designed to sit alongside the licensed partners you already use, layering orchestration over them rather than replacing them.' },
  { q: 'Is the solution suitable for global e-commerce?', a: 'Yes — Omnikeea operates globally, excluding a small number of restricted territories listed in our footer, and is built for region-aware payment journeys.' },
  { q: 'What does “protect payments” actually mean here?', a: 'It refers to the technical signals and data exchange we surface across the integration — useful for your team and the licensed partners who carry out the regulated risk operations.' },
];

export default function SolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Solve complex challenges with <span className="grad">software-first</span> solutions</>}
        lead="Solutions designed to optimise performance, strengthen infrastructure and deliver seamless, secure global experiences — built around your integration with licensed payment institutions."
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
                Every solution is delivered as software you can integrate, configure and scale — sitting cleanly alongside the licensed partners that power your payments.
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
              <div className="stat-label">licensed partners orchestrated through one layer</div>
            </div>
            <div className="stat-box">
              <div className="stat-num accent">24/7</div>
              <div className="stat-label">operational visibility across every provider</div>
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
              <h2 className="h2">The technical levers we use to optimise payments</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                Each lever is a software capability — composable, configurable, and engineered to lift performance across the licensed partners already in your stack.
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
              A focused engagement that gets the orchestration layer live quickly and keeps it improving with real operational data.
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
              <strong>How we work with partners:</strong> we provide the technical integration and infrastructure; licensed institutions handle the regulated financial operations.
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
        body="Our technical team will walk you through how Omnikeea can support your e-commerce operation."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/product"
        secondaryLabel="View product →"
      />
    </>
  );
}
