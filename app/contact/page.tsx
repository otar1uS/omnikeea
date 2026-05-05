import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

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
              <ContactForm />
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
                  Omnikeea LTD is a technology provider only. We do not process
                  payments and cannot assist with disputes, chargebacks,
                  refunds, or any financial-operations queries. Please contact
                  your licensed payment partner directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
