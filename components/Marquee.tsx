const ITEMS = [
  'API Integration', 'Unified Integration Layer', 'Operational Dashboards',
  'System Behaviour Analytics', 'Data Exchange', 'Workflow Automation',
  'E-Commerce Solutions', 'Global Infrastructure', 'Secure Integration',
];

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div className="marquee-item" key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
}
