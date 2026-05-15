import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Services',
  description: 'Terms governing the use of the Omnikeea LTD website and platform.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Services"
        lead="The terms governing your access to and use of the Omnikeea website and any technology services provided by Omnikeea LTD."
      />
      <section className="section-pad" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="legal-content reveal">
            <div className="legal-meta">Last updated: 27 April 2026 · By using this website you agree to these terms.</div>

            <h2>1. Technology-Only Scope</h2>
            <p>Omnikeea LTD is a pure technology provider, delivering software tools and integration technology. We do not hold any financial licence and we do not process, store, transmit, or handle financial transactions. All regulated financial operations are performed exclusively by licensed third-party institutions.</p>

            <h2>2. Acceptable Use</h2>
            <ul>
              <li>You may not use the website or platform to engage in unlawful activity.</li>
              <li>You may not attempt to disrupt, reverse engineer, or interfere with the website.</li>
              <li>You may not use the platform from a sanctioned or restricted territory listed in our footer.</li>
            </ul>

            <h2>3. Licensed Third-Party Providers</h2>
            <p>Where our technology helps you integrate with licensed third-party financial institutions, service providers, or other regulated entities, your relationship with those providers is governed by their own terms. All regulated activities remain the sole responsibility of those authorised providers.</p>

            <h2>4. Intellectual Property</h2>
            <p>All content on this site, including the Omnikeea name and logo, is owned by Omnikeea LTD or its licensors. You may not use it without our written consent.</p>

            <h2>5. Disclaimers</h2>
            <p>The website and platform are provided "as is". To the maximum extent permitted by law, Omnikeea disclaims all warranties, express or implied. Nothing in these terms excludes liability that cannot lawfully be excluded.</p>

            <h2>6. Liability</h2>
            <p>Omnikeea’s liability arising out of or in connection with these terms is limited to the maximum extent permitted by applicable law.</p>

            <h2>7. Changes</h2>
            <p>We may update these terms from time to time. Material changes will be highlighted on this page with an updated date.</p>

            <h2>8. Contact</h2>
            <p>For legal questions: <a href="mailto:legal@omnikeea.com">legal@omnikeea.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
