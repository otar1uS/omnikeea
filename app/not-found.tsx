import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="orb-wrap">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>
      <div className="container">
        <div className="page-hero-inner hero-reveal">
          <div className="eyebrow">404 · Not Found</div>
          <h1 className="h1">This page <span className="grad">isn't routed</span></h1>
          <p className="lead">The page you’re looking for doesn’t exist or has moved. Head back to the home page or pick a destination below.</p>
          <div className="cta-btns" style={{ marginTop: 32 }}>
            <Link href="/" className="btn btn-primary">Back to Home</Link>
            <Link href="/solutions" className="btn btn-outline">View Solutions →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
