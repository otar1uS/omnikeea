import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Technology',
  description: 'Architecture, security, and engineering principles behind the Omnikeea platform.',
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={<>Built like <span className="grad">infrastructure should be</span></>}
        lead="Defense in depth, observability everywhere, and a strict separation between data we may technically route and funds we never touch."
      />

      <section className="section-pad">
        <div className="container">
          <div className="how-head reveal">
            <div className="eyebrow">Architecture</div>
            <h2 className="h2" style={{ marginBottom: 18 }}>From integration to scale, in four steps</h2>
            <p className="lead">A clean technical path from your first API call to fully orchestrated production traffic.</p>
          </div>

          <div className="how-grid">
            {[
              ['STEP 01', 'Connect', 'Integrate via REST and webhook APIs. SDKs, sandbox environments, and reference implementations get you wired up in days.'],
              ['STEP 02', 'Configure', 'Define provider routing, fallback logic, regional rules and operational policies through configuration — no engineering rebuild required.'],
              ['STEP 03', 'Orchestrate', 'Our engine sequences provider workflows across licensed PSPs and regulated entities — automated, observable, retry-safe.'],
              ['STEP 04', 'Operate', 'Real-time dashboards, behavioral analytics, and reporting. Scale globally while licensed partners keep handling regulated activity.'],
            ].map(([n, h, p]) => (
              <div className="how-step reveal" key={n}>
                <div className="how-step-num">{n}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-section" style={{ background: 'var(--bg1)' }}>
        <div className="container">
          <div className="sec-head">
            <div className="reveal">
              <div className="eyebrow">Security & Engineering</div>
              <h2 className="h2">Defaults that take your boring questions seriously</h2>
            </div>
            <div className="reveal">
              <p className="lead">Engineering decisions favor durability over speed of release. Critical paths get the careful path.</p>
            </div>
          </div>

          <div className="sec-grid">
            {[
              { h: 'Encryption Everywhere', p: 'TLS 1.3 in transit, AES-256 at rest, hardware-backed key management. Sensitive identifiers are tokenised before they ever touch persistent storage.', d: 'M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z M9 12l2 2 4-4' },
              { h: 'Real-Time Observability', p: 'Every request is traced end-to-end across the integration layer. Structured logs, latency budgets, and per-merchant SLOs are surfaced live.', d: 'M3 12h4l3-9 4 18 3-9h4' },
              { h: 'High Availability', p: 'Active-active deployments across regions, automated failover, and zero-downtime releases. The platform is designed for 24/7 critical-path traffic.', d: 'M12 7v5l3 2' },
              { h: 'Granular Access Control', p: 'Role-based permissions, scoped API keys, IP allowlists, and detailed audit trails. Every privileged action is recorded and reviewable.', d: 'M4 4h16v16H4z M4 10h16M10 4v16' },
              { h: 'Versioned APIs', p: 'Stable, semver-tracked API contracts with explicit deprecation windows. Sandbox parity with production keeps integration work predictable.', d: 'M3 7h18M3 12h18M3 17h18' },
              { h: 'Resilient by Design', p: 'Idempotent endpoints, automatic retries, circuit breakers, and provider failover keep critical workflows moving even under partial outages.', d: 'M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3' },
            ].map((s) => (
              <div className="sec-card reveal" key={s.h}>
                <div className="sec-icon">
                  <svg viewBox="0 0 24 24"><path d={s.d} /></svg>
                </div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="global-section">
        <div className="container">
          <div className="global-grid">
            <div className="reveal">
              <div className="globe-vis" aria-hidden="true">
                <div className="globe-rings" />
                <div className="globe-meridians" />
                <span className="globe-pin" style={{ top: '28%', left: '22%' }} />
                <span className="globe-pin cyan" style={{ top: '18%', left: '55%' }} />
                <span className="globe-pin" style={{ top: '46%', left: '72%' }} />
                <span className="globe-pin cyan" style={{ top: '62%', left: '38%' }} />
                <span className="globe-pin" style={{ top: '72%', left: '60%' }} />
                <span className="globe-pin cyan" style={{ top: '36%', left: '48%' }} />
              </div>
            </div>
            <div className="reveal">
              <div className="eyebrow">Global Footprint</div>
              <h2 className="h2" style={{ marginBottom: 24 }}>Worldwide reach, with clear restrictions</h2>
              <p className="lead">
                Omnikeea LTD provides services to e-commerce businesses globally, partnering with licensed institutions across more than 100 jurisdictions. We do not operate in sanctioned or restricted territories — the full list is published in the footer of every page for transparency.
              </p>
              <div className="global-points">
                {[
                  ['Multi-Region Infrastructure', 'Distributed deployments serving merchants across continents, with regional data residency where applicable.'],
                  ['Local Provider Coverage', 'Connect to licensed PSPs and regulated providers tailored to each region — through one consistent technical surface.'],
                  ['Currency & Locale Support', 'Configuration-driven currency, locale, and presentation rules — no rebuild needed to enter a new market.'],
                  ['Sanctions-Aware', 'The platform enforces our restricted-territory policy at the technical layer. Restricted countries are listed in the footer.'],
                ].map(([h, p]) => (
                  <div className="gp-item" key={h}>
                    <div className="gp-icon">
                      <svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6" /></svg>
                    </div>
                    <div className="gp-text">
                      <h5>{h}</h5>
                      <p>{p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Talk to Engineering"
        title={<>Want a deeper architecture <span className="grad">walkthrough?</span></>}
        body="Our engineering team will walk you through the integration model, security posture, and licensed-partner relationships."
        primaryHref="/contact"
        primaryLabel="Book a Walkthrough"
        secondaryHref="/solutions"
        secondaryLabel="View Modules →"
      />
    </>
  );
}
