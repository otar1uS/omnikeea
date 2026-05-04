import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Solution — Optimise Payments Performance',
  description:
    'Software solutions designed to help e-commerce businesses optimise payment performance, enhance infrastructure, deliver frictionless global experiences and reduce risk — through technical integration with licensed partners.',
};

const solutions = [
  {
    title: 'Optimise payments performance',
    body: 'Improve acceptance rates and mitigate operational cost through smarter technical orchestration of provider workflows — designed to get more out of every provider you already work with.',
  },
  {
    title: 'Enhance infrastructure',
    body: 'Build scalable IT infrastructure for global payment growth. Modular, API-first architecture engineered for reliability, observability and rapid iteration.',
  },
  {
    title: 'Deliver frictionless global experiences',
    body: 'Create branded merchant flows and dashboards across regions. Localisation, configuration and tooling delivered as a clean software layer your team can ship fast.',
  },
  {
    title: 'Strengthen operations with smart analytics',
    body: 'Behavioural analytics and structured data exchange surface signals across the integration — giving your team and your licensed partners a clearer operational picture.',
  },
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
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mod-disclaimer reveal">
            <div>
              <strong>How we work with partners:</strong> we provide the technical integration and infrastructure; licensed institutions handle the regulated financial operations.
            </div>
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
