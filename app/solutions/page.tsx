import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Six purpose-built modules — API connectivity, orchestration, dashboards, automation, risk analytics, and data exchange.',
};

const MODULES = [
  { id: 'api', title: 'API Connectivity', tag: 'Module 01',
    body: 'Robust API tooling for integrating with licensed PSPs and financial platforms. RESTful and webhook-based, built for reliability at scale.',
    bullets: ['Versioned REST endpoints', 'Signed webhooks with retries', 'Idempotency keys & replay safety', 'Sandbox parity with production'],
    d: 'M8 9l3 3-3 3M13 15h3M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z' },
  { id: 'orchestration', title: 'Technical Orchestration', tag: 'Module 02',
    body: 'Orchestrate complex provider workflows through our automation engine. Route, sequence, and manage multi-step processes with precision.',
    bullets: ['Multi-provider routing rules', 'Conditional fallback chains', 'Retry & circuit-breaker logic', 'End-to-end traceability'],
    d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { id: 'dashboards', title: 'Merchant Dashboards', tag: 'Module 03',
    body: 'Real-time dashboards with full reporting and analytics — giving complete visibility into operations and integration performance.',
    bullets: ['Live operational metrics', 'Custom reports & exports', 'Per-merchant role views', 'Audit trails on every action'],
    d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { id: 'automation', title: 'Configuration & Automation', tag: 'Module 04',
    body: 'Flexible configuration modules and workflow automation that reduce manual overhead and ensure operational consistency across teams.',
    bullets: ['No-rebuild config changes', 'Environment promotion flow', 'Approval gates & change logs', 'Templates & reusable rules'],
    d: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
  { id: 'risk', title: 'Risk & Behavioral Analytics', tag: 'Module 05',
    body: 'IT-only risk monitoring and behavioral analytics. Identify anomalies and surface data insights — all within the technical layer.',
    bullets: ['Behavioral pattern detection', 'Configurable IT-level rules', 'Anomaly surfacing & review', 'Strictly software, never financial'],
    d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'data', title: 'Data Exchange Layers', tag: 'Module 06',
    body: 'Secure system-to-system communication infrastructure enabling reliable, structured information flows between platforms.',
    bullets: ['Schema-validated messaging', 'Encrypted transport & at rest', 'Granular access control', 'High-throughput connectors'],
    d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform Solutions"
        title={<>Six modules. <span className="grad">One technical surface.</span></>}
        lead="Everything an e-commerce business needs to integrate with licensed payment partners — without ever holding, transmitting, or processing funds itself."
      />

      <section className="section-pad">
        <div className="container">
          <div className="modules-grid reveal">
            {MODULES.map((m) => (
              <div className="mod-card" id={m.id} key={m.id}>
                <div className="mod-icon">
                  <svg viewBox="0 0 24 24"><path d={m.d} /></svg>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: 10 }}>{m.tag}</div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
                <ul style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {m.bullets.map((b) => (
                    <li key={b} style={{ fontSize: 13, color: 'var(--text-mid)', paddingLeft: 18, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--violet)' }}>↳</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mod-disclaimer reveal">
            <div>
              <strong>Technology only:</strong> All platform features operate strictly as software functionality. Omnikeea LTD does not process, transmit, store, or execute financial transactions. All financial operations are performed exclusively by licensed institutions.
            </div>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Ready to integrate?"
        title={<>One platform. <span className="grad">Six ways to ship faster.</span></>}
        body="Talk to our engineering team about scoping the right modules for your e-commerce operation."
        primaryHref="/contact"
        primaryLabel="Talk to Engineering"
        secondaryHref="/technology"
        secondaryLabel="See Architecture →"
      />
    </>
  );
}
