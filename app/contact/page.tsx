import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Omnikeea engineering team about your e-commerce integration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="grad">engineering</span>
          </>
        }
        lead="Tell us about your stack, current providers, and what you’re trying to integrate. We’ll get back to you within one business day."
      />

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="form-grid">
            <div className="reveal">
              <div className="form-card">
                <h3 style={{ marginTop: 0 }}>Send us an email</h3>
                <p style={{ color: "var(--text-mid)" }}>
                  Tell us about your stack, current providers, and what you’re
                  trying to integrate. Click below to open your mail app — we’ll
                  get back to you within one business day.
                </p>
                <a
                  href="mailto:contact@omnikeea.com?subject=Integration%20enquiry&body=Hi%20Omnikeea%20team%2C%0A%0AName%3A%0ACompany%3A%0AWhat%20we%27re%20trying%20to%20integrate%3A%0A%0A"
                  className="btn btn-primary"
                  style={{ marginTop: 6 }}
                >
                  Email contact@omnikeea.com
                </a>
              </div>
            </div>

            <div className="form-meta reveal">
              <div className="form-meta-card">
                <h4>Direct email</h4>
                <p>
                  For general enquiries:{" "}
                  <a href="mailto:contact@omnikeea.com">contact@omnikeea.com</a>
                </p>
              </div>

              <div
                className="form-meta-card"
                style={{ borderLeft: "2px solid var(--cyan)" }}
              >
                <h4 style={{ color: "var(--cyan)" }}>Important</h4>
                <p>
                  Omnikeea LTD is a technology provider only. We do not process,
                  store, transmit or handle financial transactions and cannot
                  assist with disputes, chargebacks, refunds, or any
                  financial-operations queries. Please contact your licensed
                  third-party financial service provider directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


