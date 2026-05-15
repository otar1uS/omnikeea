import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Omnikeea LTD handles personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How Omnikeea LTD collects, uses, and protects personal data when you interact with our website and services."
      />
      <section className="section-pad" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="legal-content reveal">
            <div className="legal-meta">Last updated: 27 April 2026 · This policy applies to omnikeea.com and the Omnikeea platform.</div>

            <h2>1. Who We Are</h2>
            <p>Omnikeea LTD ("Omnikeea", "we", "us") is a technology company providing software infrastructure for e-commerce businesses to integrate with licensed third-party financial service providers. We are not a financial institution and we do not process, store, transmit, or handle financial transactions.</p>

            <h2>2. Information We Collect</h2>
            <p>We collect information you provide directly (such as when you fill out the contact form) and limited technical information your browser provides automatically.</p>
            <ul>
              <li>Identity & contact data — name, email, company, role.</li>
              <li>Enquiry content — the topic and message you submit.</li>
              <li>Technical data — IP address, browser type, device information, and pages visited.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your enquiry and follow up on it.</li>
              <li>To improve and secure our website and platform.</li>
              <li>To comply with our legal and contractual obligations.</li>
            </ul>

            <h2>4. Legal Bases</h2>
            <p>We rely on your consent (for enquiry processing), our legitimate interests (for website security and improvement), and legal obligation (where required by applicable law).</p>

            <h2>5. Sharing</h2>
            <p>We do not sell your personal data. We share data only with vetted infrastructure providers acting as processors on our behalf, and with regulators where legally required.</p>

            <h2>6. International Transfers</h2>
            <p>We do not operate in sanctioned or restricted territories — the full list is published in the footer of every page. Where data is transferred internationally, we apply appropriate safeguards.</p>

            <h2>7. Retention</h2>
            <p>We keep enquiry data for as long as needed to respond to and follow up on your request, and for a reasonable period afterwards, then delete or anonymise it.</p>

            <h2>8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to access, correct, delete, port, or object to our processing of your personal data. Contact <a href="mailto:privacy@omnikeea.com">privacy@omnikeea.com</a> to exercise these rights.</p>

            <h2>9. Contact</h2>
            <p>For privacy questions: <a href="mailto:privacy@omnikeea.com">privacy@omnikeea.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
