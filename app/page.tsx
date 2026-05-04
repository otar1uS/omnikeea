import Link from 'next/link';
import Radar from '@/components/Radar';
import Marquee from '@/components/Marquee';
import Cta from '@/components/Cta';

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <div className="hero-wrap">
          <div className="orb-wrap">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
          </div>
          <div className="hero-inner">
            <div className="hero-content hero-reveal">
              <div className="hero-tag">
                <div className="hero-tag-dot" />
                Payment Technology Infrastructure
              </div>
              <h1 className="hero-title">
                The technical layer<br />
                <span className="grad">powering global</span><br />
                payment ecosystems
              </h1>
              <p className="hero-sub">
                Omnikeea LTD builds advanced software infrastructure that connects e-commerce businesses with licensed payment institutions — securely, scalably, and globally.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">Contact us</Link>
                <Link href="/product" className="btn btn-outline">See the product →</Link>
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item">
                  <div className="hero-meta-val"><span className="accent">100+</span></div>
                  <div className="hero-meta-label">Countries served</div>
                </div>
                <div className="hero-meta-item">
                  <div className="hero-meta-val"><span className="accent">6</span></div>
                  <div className="hero-meta-label">Platform modules</div>
                </div>
                <div className="hero-meta-item">
                  <div className="hero-meta-val"><span className="accent">24/7</span></div>
                  <div className="hero-meta-label">Infrastructure</div>
                </div>
              </div>
            </div>
            <Radar />
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section-pad">
        <div className="container">
          <div className="what-grid">
            <div className="reveal">
              <div className="eyebrow">About Omnikeea</div>
              <h2 className="h2" style={{ marginBottom: 24 }}>Advanced software for modern e-commerce</h2>
              <p className="lead" style={{ marginBottom: 24 }}>
                Omnikeea LTD is a technology company specializing in advanced software solutions for online businesses and financial service providers. Our platform delivers secure, scalable, customizable IT infrastructure designed to support seamless integrations with licensed payment institutions and other regulated partners.
              </p>
              <p className="lead" style={{ fontSize: 15 }}>
                We focus exclusively on technology development, data connectivity, and workflow automation — giving merchants a clean, modern integration into their licensed partners.
              </p>
              <br />
              <Link href="/solution" className="btn btn-outline">Explore the platform →</Link>
            </div>
            <div className="what-right reveal">
              {[
                ['01', 'Technology Provider', 'We design and build software infrastructure that integrates seamlessly with your licensed payment partners.'],
                ['02', 'Secure & Scalable Architecture', 'Enterprise-grade infrastructure built to scale across global deployments with strict data security standards.'],
                ['03', 'API-First Integration', 'Every module exposes clean APIs, enabling rapid integration with licensed PSPs and financial platforms.'],
                ['04', 'E-Commerce Focused', 'Built for online business — merchant dashboards, analytics, and automation tailored to e-commerce operations.'],
              ].map(([n, h, p]) => (
                <div className="what-item" key={n}>
                  <div className="what-num">{n}</div>
                  <div className="what-text">
                    <h4>{h}</h4>
                    <p>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-row">
            <div className="stat-box reveal">
              <div className="stat-num accent" data-count="100" data-suffix="+">0+</div>
              <div className="stat-label">Countries served globally</div>
            </div>
            <div className="stat-box reveal">
              <div className="stat-num" data-count="6">0</div>
              <div className="stat-label">Core platform modules</div>
            </div>
            <div className="stat-box reveal">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Infrastructure availability</div>
            </div>
            <div className="stat-box reveal">
              <div className="stat-num accent">API</div>
              <div className="stat-label">First-class developer experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="modules-section">
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">Platform Solutions</div>
              <h2 className="h2">Everything your integration needs</h2>
            </div>
            <div className="reveal">
              <p className="lead">Six purpose-built modules that enable e-commerce businesses to connect with their licensed institutions and operate at scale — through clean software interfaces.</p>
            </div>
          </div>

          <div className="modules-grid reveal">
            {[
              {
                title: 'API Connectivity', body: 'Robust API tooling for integrating with licensed PSPs and financial platforms. RESTful and webhook-based, built for reliability at scale.',
                d: 'M8 9l3 3-3 3M13 15h3M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z',
              },
              {
                title: 'Technical Orchestration', body: 'Orchestrate complex provider workflows through our automation engine. Route, sequence, and manage multi-step processes with precision.',
                d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
              },
              {
                title: 'Merchant Dashboards', body: 'Real-time dashboards with full reporting and analytics — giving complete visibility into operations and integration performance.',
                d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
              },
              {
                title: 'Configuration & Automation', body: 'Flexible configuration modules and workflow automation that reduce manual overhead and ensure operational consistency across teams.',
                d: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
              },
              {
                title: 'Risk & Behavioral Analytics', body: 'IT-only risk monitoring and behavioral analytics. Identify anomalies and surface data insights — all within the technical layer.',
                d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Data Exchange Layers', body: 'Secure system-to-system communication infrastructure enabling reliable, structured information flows between platforms.',
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
              <strong>How we fit in:</strong> Omnikeea provides software functionality that connects merchants with their licensed payment partners. Financial operations are carried out by those licensed institutions.
            </div>
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="how-orb" />
        <div className="container">
          <div className="how-head reveal">
            <div className="eyebrow">How It Works</div>
            <h2 className="h2" style={{ marginBottom: 18 }}>From integration to scale in four steps</h2>
            <p className="lead">A clean technical path from first API call to fully orchestrated production traffic — built for speed, observability and global scale.</p>
          </div>
          <div className="how-grid">
            {[
              ['STEP 01', 'Connect', 'Integrate via our REST and webhook APIs. SDKs, sandbox environments, and reference implementations get you wired up in days, not quarters.'],
              ['STEP 02', 'Configure', 'Define provider routing, fallback logic, regional rules and operational policies through our configuration modules — no engineering rebuild required.'],
              ['STEP 03', 'Orchestrate', 'Our orchestration engine sequences provider workflows across licensed PSPs, banks, and regulated entities — automated, observable, retry-safe.'],
              ['STEP 04', 'Operate', 'Run real-time dashboards, behavioral analytics, and reporting. Scale globally with full operational visibility.'],
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

      <section className="framework-section">
        <div className="container">
          <div className="framework-orb" />
          <div className="framework-grid">
            <div className="reveal">
              <div className="eyebrow">Licensed Partners</div>
              <h2 className="h2" style={{ marginBottom: 24 }}>One integration, a whole network of providers</h2>
              <p className="lead" style={{ marginBottom: 48 }}>
                We collaborate with a network of licensed financial institutions, payment service providers, and regulated entities — so your team gets a single, modern technical interface to a wide ecosystem.
              </p>
              <div className="framework-steps">
                {[
                  ['01', 'Technical integration support', 'We provide the integration layer, the SDKs and the operational tooling that connect your stack to licensed partners.'],
                  ['02', 'Powered by licensed institutions', 'Financial operations run on the rails of established licensed institutions, with the regulatory coverage you expect.'],
                  ['03', 'Built for global scale', 'Modular architecture, observable workflows and configuration-driven routing — engineered to grow with your business.'],
                ].map(([n, h, p]) => (
                  <div className="fw-step" key={n}>
                    <div className="fw-step-num">{n}</div>
                    <div className="fw-step-content">
                      <h4>{h}</h4>
                      <p>{p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="resp-diagram">
                <div className="resp-title">How the integration is layered</div>
                <div className="resp-layer licensed">
                  <div className="resp-layer-tag">Licensed Institutions</div>
                  <div className="resp-layer-name">Payment Rails</div>
                  <div className="resp-layer-desc">Established PSPs and financial institutions that power payment flows for your business.</div>
                </div>
                <div className="resp-arrow">↕</div>
                <div className="resp-layer omni">
                  <div className="resp-layer-tag">Omnikeea LTD</div>
                  <div className="resp-layer-name">Technical Integration Layer</div>
                  <div className="resp-layer-desc">API orchestration, data exchange, analytics and merchant tooling — the software backbone that ties everything together.</div>
                </div>
                <div className="resp-arrow">↕</div>
                <div className="resp-layer merchant">
                  <div className="resp-layer-tag">Your Business</div>
                  <div className="resp-layer-name">E-Commerce Merchant</div>
                  <div className="resp-layer-desc">A single, modern interface to a network of licensed providers, with full operational visibility.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
