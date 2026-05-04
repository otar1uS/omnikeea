import PageHero from '@/components/PageHero';
import Link from 'next/link';

export default function SubPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners / Introducer Program"
        title={<><span className="grad">Introducer Program</span></>}
        lead="Refer merchants and unlock new revenue opportunities with Omnikeea."
      />

      <section className="section-pad">
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">Overview</div>
              <h2 className="h2">Grow alongside us</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                Join our network of trusted introducers. Connect your network with our advanced technical payment infrastructure and earn recurring rewards for every successful integration.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: 60, padding: 40, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 16 }}>
            <h3 style={{ fontFamily: 'var(--ff-head)', fontSize: 24, marginBottom: 16 }}>Technical implementation</h3>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 24 }}>
              Omnikeea provides the technical software infrastructure necessary to deploy this capability globally. Our system operates purely as a technology layer — we do not process funds, hold balances, or act as a merchant of record. All financial operations are managed through your integrated, licensed payment partners.
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
              <p className="lead">Built for scale, security, and maximum performance across all markets.</p>
            </div>
          </div>
          <div className="sec-grid reveal">
            <div className="sec-card">
              <h3>API-First</h3>
              <p>Modern RESTful architecture designed for developer experience and rapid integration.</p>
            </div>
            <div className="sec-card">
              <h3>High Availability</h3>
              <p>Redundant systems ensuring 99.99% uptime for your critical payment flows.</p>
            </div>
            <div className="sec-card">
              <h3>Agnostic Layer</h3>
              <p>Connect with any PSP, acquirer, or alternative payment method seamlessly.</p>
            </div>
            <div className="sec-card">
              <h3>Advanced Routing</h3>
              <p>Intelligent, rules-based engines to optimize approval rates and reduce costs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
