import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'For Partners — Introducer Program',
  description:
    'Refer e-commerce merchants to Omnikeea LTD and unlock new revenue opportunities. A simple introducer program for consultants, agencies and integrators.',
};

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
                You introduce the merchant; we handle the technical conversation. A simple, transparent program for partners who want to plug their clients into a modern integration layer.
              </p>
            </div>
          </div>

          <div className="modules-grid reveal">
            {[
              {
                title: 'Refer with confidence',
                body: 'Introduce e-commerce merchants who are looking for a clean orchestration layer to connect with licensed payment institutions.',
              },
              {
                title: 'Transparent terms',
                body: 'Clear partner agreement, defined revenue terms, and direct contact with our team throughout the lifecycle of every introduction.',
              },
              {
                title: 'A modern integration layer',
                body: 'You introduce merchants to powerful technology — clean APIs, orchestration and tooling backed by an established licensed partner network.',
              },
              {
                title: 'Long-term collaboration',
                body: 'We build genuine partnerships with consultants, agencies and integrators who care about doing things the right way.',
              },
            ].map((m) => (
              <div className="mod-card" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
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
