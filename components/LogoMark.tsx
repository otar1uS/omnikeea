export default function LogoMark({ className = 'logo-mark' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" aria-hidden="true">
      <defs>
        <linearGradient id="ok-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.82 0.16 168)" />
          <stop offset="55%" stopColor="oklch(0.74 0.16 168)" />
          <stop offset="100%" stopColor="oklch(0.66 0.18 30)" />
        </linearGradient>
        <linearGradient id="ok-stroke" x1="0" y1="0" x2="0" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
        <radialGradient id="ok-glow" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* Tile background */}
      <rect x="1" y="1" width="34" height="34" rx="9" fill="url(#ok-grad)" />
      <rect x="1" y="1" width="34" height="34" rx="9" fill="url(#ok-glow)" opacity="0.6" />
      <rect x="1.5" y="1.5" width="33" height="33" rx="8.5" fill="none" stroke="url(#ok-stroke)" strokeWidth="1" />

      {/* O ring */}
      <circle cx="13.6" cy="18" r="7.2" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" opacity="0.96" />

      {/* K — vertical bar + two diagonals meeting at the spine midpoint */}
      <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M22.4 11.2 L22.4 24.8" />
        <path d="M22.4 18 L28.4 11.4" />
        <path d="M22.4 18 L28.4 24.6" />
      </g>

      {/* Tiny accent dot — keeps the network/node hint */}
      <circle cx="13.6" cy="10.8" r="1.4" fill="#fff" opacity="0.92" />
    </svg>
  );
}
