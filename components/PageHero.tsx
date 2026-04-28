type Props = { eyebrow: string; title: React.ReactNode; lead: string };

export default function PageHero({ eyebrow, title, lead }: Props) {
  return (
    <section className="page-hero">
      <div className="orb-wrap">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>
      <div className="container">
        <div className="page-hero-inner hero-reveal">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="h1">{title}</h1>
          <p className="lead">{lead}</p>
        </div>
      </div>
    </section>
  );
}
