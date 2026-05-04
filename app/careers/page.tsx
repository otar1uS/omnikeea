import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Omnikeea LTD. We are hiring a Social Media Content Editor to help shape the voice of our payment technology infrastructure brand.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Help us build the <span className="grad">technical layer</span> behind global e-commerce</>}
        lead="We are a young technology company building serious payment infrastructure. We hire carefully and we build deliberately."
      />

      <section className="section-pad">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 780 }}>
            <div className="eyebrow">Open Role</div>
            <h2 className="h2" style={{ marginBottom: 16 }}>Social Media Content Editor</h2>
            <p className="lead" style={{ marginBottom: 24 }}>
              Remote · Full-time or part-time · Open to candidates worldwide (excluding restricted territories listed in our footer).
            </p>

            <h4 style={{ marginTop: 32, marginBottom: 12 }}>About the role</h4>
            <p style={{ marginBottom: 16 }}>
              You will own Omnikeea&apos;s social presence end-to-end — planning, writing, editing and publishing content across our channels. You will translate technical concepts (payment orchestration, integration, infrastructure) into clear, engaging content for a B2B audience.
            </p>

            <h4 style={{ marginTop: 28, marginBottom: 12 }}>What you will do</h4>
            <ul style={{ paddingLeft: 22, marginBottom: 16 }}>
              <li>Plan and produce a steady cadence of social posts, short-form copy and visual assets.</li>
              <li>Edit content for clarity, tone and accuracy — keeping every post on-brand.</li>
              <li>Work closely with the founders and product team to surface ideas worth saying.</li>
              <li>Track engagement, iterate on what works, retire what does not.</li>
            </ul>

            <h4 style={{ marginTop: 28, marginBottom: 12 }}>What we are looking for</h4>
            <ul style={{ paddingLeft: 22, marginBottom: 16 }}>
              <li>Strong writing and editing in English — concise, intentional, on-brand.</li>
              <li>Experience producing social content for B2B, fintech or technology brands is a plus.</li>
              <li>Comfortable with technical topics and willing to learn payments infrastructure.</li>
              <li>Reliable, organised, and able to ship work without close supervision.</li>
            </ul>

            <h4 style={{ marginTop: 28, marginBottom: 12 }}>How to apply</h4>
            <p style={{ marginBottom: 24 }}>
              Send a short note about yourself, links to relevant work, and your availability. We read every application.
            </p>

            <Link href="/contact" className="btn btn-primary">Apply via Contact us</Link>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Don't see a fit?"
        title={<>We still want to <span className="grad">hear from you.</span></>}
        body="If you think you can add something to Omnikeea, reach out and tell us how."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/product"
        secondaryLabel="Learn about the product →"
      />
    </>
  );
}
