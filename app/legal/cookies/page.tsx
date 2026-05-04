import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy of Omnikeea LTD.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Cookie Policy</>}
        lead="This Cookie Policy explains how Omnikeea LTD uses cookies and similar technologies on this website."
      />

      <section className="section-pad">
        <div className="container" style={{ maxWidth: 820 }}>
          <article className="reveal" style={{ display: 'grid', gap: 20 }}>
            <h3>1. What are cookies</h3>
            <p>
              Cookies are small text files placed on your device when you visit a website. They are used to make the site work, to improve user experience and to provide information to site owners.
            </p>

            <h3>2. How we use cookies</h3>
            <p>
              We use a limited number of cookies that are strictly necessary to operate this website, plus optional cookies that help us understand how visitors interact with our pages. We do not use cookies to process or store financial information — Omnikeea LTD is a technology provider only and does not handle financial transactions.
            </p>

            <h3>3. Categories of cookies</h3>
            <ul style={{ paddingLeft: 22 }}>
              <li><strong>Essential</strong> — required for the website to function (security, navigation, basic preferences).</li>
              <li><strong>Analytics</strong> — help us understand aggregate traffic and improve our content.</li>
              <li><strong>Functionality</strong> — remember your preferences across visits.</li>
            </ul>

            <h3>4. Managing cookies</h3>
            <p>
              You can configure your browser to refuse cookies or to alert you when cookies are being sent. Note that some parts of the site may not function correctly if cookies are disabled.
            </p>

            <h3>5. Changes to this policy</h3>
            <p>
              We may update this Cookie Policy from time to time. The latest version will always be available on this page.
            </p>

            <h3>6. Contact</h3>
            <p>
              For questions about this Cookie Policy, contact us at <a href="mailto:contact@omnikeea.com">contact@omnikeea.com</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
