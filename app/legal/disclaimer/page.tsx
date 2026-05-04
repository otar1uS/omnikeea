import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer of Omnikeea LTD.',
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Disclaimer</>}
        lead="Important information about the role and limitations of Omnikeea LTD as a technology provider."
      />

      <section className="section-pad">
        <div className="container" style={{ maxWidth: 820 }}>
          <article className="reveal" style={{ display: 'grid', gap: 20 }}>
            <h3>1. Technology-only provider</h3>
            <p>
              Omnikeea LTD is a technology company providing software infrastructure and integration tooling. Omnikeea LTD is not a bank, payment institution, electronic money institution, or any other type of regulated financial entity. Omnikeea LTD does not process, transmit, store or execute financial transactions.
            </p>

            <h3>2. Role of licensed partners</h3>
            <p>
              All financial operations referenced on this website are performed exclusively by licensed financial institutions, payment service providers and other regulated entities. All regulated activities remain fully under the responsibility of those authorised providers. Our role is limited to technical integration and infrastructure support.
            </p>

            <h3>3. Informational purposes</h3>
            <p>
              Information on this website is provided for general informational purposes only. It does not constitute financial, legal or regulatory advice. You should obtain independent professional advice before making any decision based on the content of this site.
            </p>

            <h3>4. Geographic restrictions</h3>
            <p>
              Omnikeea LTD operates globally except in the territories listed in the footer of this website. Services are not offered, marketed or made available in those restricted territories.
            </p>

            <h3>5. No warranties</h3>
            <p>
              While we make reasonable efforts to keep this website accurate and up to date, we make no warranties or representations of any kind, express or implied, about the completeness, accuracy, reliability or availability of the website or the information contained on it.
            </p>

            <h3>6. Third-party links</h3>
            <p>
              This website may contain links to third-party websites. Omnikeea LTD has no control over the content of those sites and accepts no responsibility for them.
            </p>

            <h3>7. Contact</h3>
            <p>
              For questions about this Disclaimer, contact us at <a href="mailto:contact@omnikeea.com">contact@omnikeea.com</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
