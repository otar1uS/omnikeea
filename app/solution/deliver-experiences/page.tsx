import PageHero from '@/components/PageHero';
import Link from 'next/link';

export default function SubPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions / Deliver Experiences"
        title={<><span className="grad">Deliver Frictionless Experiences</span></>}
        lead="Create fully branded, global checkout journeys that convert."
      />

      <section className="section-pad">
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">Overview</div>
              <h2 className="h2">Remove checkout friction</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                Display localised options, localised language support, and localised pricing through configurable interfaces to ensure customers can complete their journey anywhere in the world.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: 60, padding: 40, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 16 }}>
            <h3 style={{ fontFamily: 'var(--ff-head)', fontSize: 24, marginBottom: 16 }}>Technical implementation</h3>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 24 }}>
              Omnikeea provides the technical software infrastructure necessary to deploy this capability globally. Our system operates purely as a technology layer — we do not process, store, transmit or handle financial transactions, hold balances, or act as a merchant of record. All regulated financial operations are performed exclusively by your licensed third-party providers.
            </p>
            <Link href="/contact" className="btn btn-primary">Discuss Integration</Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg1)' }}>
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <h2 className="h2">Why choose Omnikeea?</h2>
            </div>
            <div>
              <p className="lead">Built for scale, security, and maximum technical performance across all markets.</p>
            </div>
          </div>
          <div className="sec-grid reveal">
            <div className="sec-card">
              <h3>API-First</h3>
              <p>Modern RESTful architecture designed for developer experience and rapid integration.</p>
            </div>
            <div className="sec-card">
              <h3>High Availability</h3>
              <p>Redundant systems ensuring 99.99% uptime for your critical integration workflows.</p>
            </div>
            <div className="sec-card">
              <h3>Agnostic Layer</h3>
              <p>Connect with any licensed third-party service provider through a single technical interface.</p>
            </div>
            <div className="sec-card">
              <h3>Configurable Workflow Rules</h3>
              <p>Configurable, rules-based engines to optimise technical performance and reduce operational overhead.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
