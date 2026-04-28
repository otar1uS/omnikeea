import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Company',
  description: 'Who we are, how we operate, and why the line between technology and finance matters.',
};

const VALUES = [
  ['01', 'Technology Only', 'We build software, not financial services. Holding no payment licenses keeps our scope clear and our customers’ obligations clean.'],
  ['02', 'Boring On Purpose', 'Idempotency, observability, retries, audit trails. The unglamorous parts are where infrastructure lives or dies.'],
  ['03', 'Configuration Over Code', 'Operations should evolve without re-deploys. Config-driven workflows let teams move without queuing engineering work.'],
  ['04', 'Documented Defaults', 'Every default in the platform is written down and explainable. Surprise behaviour is a bug, not a feature.'],
  ['05', 'Licensed Partners First', 'Regulated activity stays with regulated entities. Our job is to make their integration painless — never to substitute for them.'],
  ['06', 'Long-Term Contracts', 'Versioned APIs, explicit deprecation windows, reproducible behaviour. Customers can plan multi-year roadmaps on the platform.'],
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={<>We build the <span className="grad">technology</span> — not the transactions</>}
        lead="Omnikeea LTD is a technology company specializing in advanced software solutions for online businesses and financial service providers. Pure infrastructure. Strict scope."
      />

      <section className="section-pad">
        <div className="container">
          <div className="what-grid">
            <div className="reveal">
              <div className="eyebrow">Our Mission</div>
              <h2 className="h2" style={{ marginBottom: 24 }}>Make payment-tech integration the easiest part of running an e-commerce business</h2>
              <p className="lead" style={{ marginBottom: 18 }}>
                Our platform delivers secure, scalable, and customizable IT infrastructure designed to support seamless integrations with licensed payment institutions and other regulated partners.
              </p>
              <p className="lead" style={{ fontSize: 15 }}>
                We focus exclusively on technology development, data connectivity, and workflow automation. All financial operations are performed exclusively by our licensed institutional partners. We never hold, transmit, store, or execute funds.
              </p>
            </div>
            <div className="what-right reveal">
              <div className="what-item">
                <div className="what-num">01</div>
                <div className="what-text"><h4>Software, not licences</h4><p>We hold no payment licences and execute no financial transactions. Our role is technical integration only.</p></div>
              </div>
              <div className="what-item">
                <div className="what-num">02</div>
                <div className="what-text"><h4>Engineered to last</h4><p>Long-lived APIs, observable systems, and conservative defaults. Built for multi-year customer roadmaps.</p></div>
              </div>
              <div className="what-item">
                <div className="what-num">03</div>
                <div className="what-text"><h4>Globally available, transparently restricted</h4><p>We work worldwide except in the territories listed in our footer. The list is published, not buried.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg1)' }}>
        <div className="container">
          <div className="how-head reveal">
            <div className="eyebrow">What We Stand For</div>
            <h2 className="h2">Six principles that shape the platform</h2>
          </div>
          <div className="val-grid reveal">
            {VALUES.map(([n, h, p]) => (
              <div className="val-card" key={n}>
                <div className="val-num">PRINCIPLE {n}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Frequently Asked</div>
            <h2 className="h2">Common questions, answered plainly</h2>
          </div>
          <div className="faq-grid reveal">
            {[
              ['Is Omnikeea a payment processor?', 'No. Omnikeea LTD is strictly a technology and payment-gateway-solution provider. We do not hold payment licenses and we do not process, transmit, store, or execute financial transactions. All financial operations are performed by licensed institutions.'],
              ['What does the platform actually do?', 'Software infrastructure: API connectivity, technical orchestration of provider workflows, merchant dashboards and analytics, configuration and automation modules, IT-level risk and behavioral analytics, and secure system-to-system data exchange.'],
              ['Where do you operate?', 'We work globally with e-commerce businesses, except in sanctioned or restricted territories. The full list of countries where services are not available is published in the footer of every page on this website.'],
              ['How do licensed partners fit in?', 'We collaborate with a network of licensed financial institutions, payment service providers, and regulated entities. Our role is limited to technical integration and infrastructure support — all regulated activity remains fully under the responsibility of those authorized providers.'],
              ['Who is Omnikeea built for?', 'E-commerce operators of every shape — direct-to-consumer brands, multi-vendor marketplaces, subscription and SaaS businesses, and cross-border merchants — who need a clean technical layer between their storefront and licensed payment partners.'],
              ['How quickly can a team integrate?', 'Most teams reach a working sandbox integration within days using our REST and webhook APIs, SDKs, and reference implementations. Production rollout timing depends on your licensed partners and your own internal review.'],
            ].map(([q, a], i) => (
              <details className="faq-item" key={q} open={i === 0}>
                <summary>{q}</summary>
                <div className="faq-body">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Get In Touch"
        title={<>Want to know more about <span className="grad">how we work?</span></>}
        body="We are happy to walk through how the platform fits with your existing stack and licensed partners."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/technology"
        secondaryLabel="See Architecture →"
      />
    </>
  );
}
