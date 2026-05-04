import Link from 'next/link';

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function Cta({
  eyebrow = 'Get Started',
  title = (<>Ready to integrate your <span className="grad">payment infrastructure?</span></>),
  body = 'Connect with our technical team and explore how Omnikeea can support your e-commerce operation.',
  primaryHref = '/contact',
  primaryLabel = 'Contact us',
  secondaryHref = '/solution',
  secondaryLabel = 'View solution →',
}: Props) {
  return (
    <section className="cta-section">
      <div className="cta-orb" />
      <div className="container">
        <div className="cta-inner reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>{eyebrow}</div>
          <h2 className="h2">{title}</h2>
          <p className="lead">{body}</p>
          <div className="cta-btns">
            <Link href={primaryHref} className="btn btn-primary">{primaryLabel}</Link>
            <Link href={secondaryHref} className="btn btn-outline">{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
