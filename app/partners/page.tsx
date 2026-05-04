import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'For Partners — Introducer Program',
  description:
    'Refer e-commerce merchants to Omnikeea LTD and unlock new revenue opportunities. A simple introducer program for consultants, agencies and integrators.',
};

const benefits = [
  {
    title: 'Refer with confidence',
    body: 'Introduce e-commerce merchants who are looking for a clean orchestration layer to connect with licensed payment institutions.',
    d: 'M5 13l4 4L19 7',
  },
  {
    title: 'Transparent terms',
    body: 'Clear partner agreement, defined revenue terms, and direct contact with our team throughout the lifecycle of every introduction.',
    d: 'M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z',
  },
  {
    title: 'A modern integration layer',
    body: 'You introduce merchants to powerful technology — clean APIs, orchestration and tooling backed by an established licensed partner network.',
    d: 'M8 9l3 3-3 3M13 15h3M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z',
  },
  {
    title: 'Long-term collaboration',
    body: 'We build genuine partnerships with consultants, agencies and integrators who care about doing things the right way.',
    d: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    title: 'Technical credibility',
    body: 'Bring your clients a software-first orchestration platform — engineered, observable and built for serious e-commerce operations.',
    d: 'M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z',
  },
  {
    title: 'Direct technical contact',
    body: 'Your introduced merchants speak directly with our technical team — no hand-offs, no friction, no diluted message.',
    d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
  },
];

const steps = [
  { n: '01', title: 'Apply to join', body: 'Reach out via the contact form. We review every applicant and respond personally.' },
  { n: '02', title: 'Sign the partner agreement', body: 'A clear, transparent introducer agreement defines the relationship and revenue terms upfront.' },
  { n: '03', title: 'Introduce merchants', body: 'Connect us to e-commerce merchants whose challenges fit the orchestration layer we build.' },
  { n: '04', title: 'Collaborate long-term', body: 'Stay close as merchants integrate, scale and grow — we keep partners informed throughout.' },
];

const audiences = [
  { tag: 'Consultants', title: 'Payment & e-commerce consultants', body: 'Bring clients a modern technical option that complements their existing licensed providers.' },
  { tag: 'Agencies', title: 'Digital & e-commerce agencies', body: 'Add a serious orchestration partner to the stack you recommend to your merchant clients.' },
  { tag: 'Integrators', title: 'Systems integrators', body: 'Plug Omnikeea into integrations you ship — clean APIs, reliable infrastructure, observable workflows.' },
  { tag: 'Advisors', title: 'Independent advisors', body: 'Refer e-commerce operators looking to consolidate technical complexity across their licensed partner network.' },
];

const faqs = [
  { q: 'Who is the introducer program for?', a: 'Consultants, agencies, integrators and independent advisors who work with e-commerce merchants and want to introduce them to a modern orchestration layer.' },
  { q: 'What is the commercial structure?', a: 'A clear introducer agreement with defined revenue terms. Specifics are shared during onboarding once we have aligned on the partnership.' },
  { q: 'Do I need technical expertise?', a: 'No deep technical expertise is required. You introduce the merchant — our technical team handles the integration conversation directly.' },
  { q: 'Are there any restrictions?', a: 'We operate globally with the exception of restricted territories listed in our footer. Introductions must comply with those restrictions.' },
  { q: 'How do I apply?', a: 'Send us a short note via the contact form telling us about who you work with and the kind of merchants you would introduce.' },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Partners"
        title={<>Refer merchants. <span className="grad">Unlock new revenue.</span></>}
        lead="Our Introducer Program is designed for consultants, agencies and integrators who work with e-commerce merchants and want to connect them with a modern technical orchestration layer."
      />

      <section className="section-pad">
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">Introducer Program</div>
              <h2 className="h2">A simple way to introduce merchants to Omnikeea</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                You introduce the merchant; we handle the technical conversation. A simple, transparent program for partners who want to plug their clients into a modern integration layer — backed by a licensed partner network.
              </p>
            </div>
          </div>

          <div className="sec-grid reveal">
            {benefits.map((b) => (
              <div className="sec-card" key={b.title}>
                <div className="sec-icon">
                  <svg viewBox="0 0 24 24"><path d={b.d} /></svg>
                </div>
                <h4>{b.title}</h4>
                <p>{b.body}</p>
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
            <h2 className="h2">From application to long-term partnership</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A clean four-step program designed to keep partners informed and merchants well-served from the first introduction onward.
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

      <section className="cases-section">
        <div className="container">
          <div className="modules-header">
            <div className="reveal">
              <div className="eyebrow">Who it&apos;s for</div>
              <h2 className="h2">Built for partners who care about doing it right</h2>
            </div>
            <div className="reveal">
              <p className="lead">
                If you advise, build for or work alongside e-commerce merchants — and you want to introduce them to a serious technical layer — the program is for you.
              </p>
            </div>
          </div>

          <div className="cases-grid reveal">
            {audiences.map((a) => (
              <div className="case-card" key={a.title}>
                <div className="case-tag">{a.tag}</div>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="how-head reveal">
            <div className="eyebrow">Frequently asked</div>
            <h2 className="h2">Partner program — common questions</h2>
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
        eyebrow="Become an introducer"
        title={<>Interested in <span className="grad">partnering with us?</span></>}
        body="Reach out to our team for partner agreement details and onboarding."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/product"
        secondaryLabel="See the product →"
      />
    </>
  );
}
