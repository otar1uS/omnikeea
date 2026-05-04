'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import LogoMark from './LogoMark';

/* ── Dropdown content ── */

const productItems = [
  {
    title: 'Orchestration',
    desc: 'Orchestrate your payments, ensuring every transaction performs',
    href: '/product/orchestration',
    d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    title: 'Dynamic Cashier',
    desc: 'Deliver seamless, localised payment experiences',
    href: '/product/dynamic-cashier',
    d: 'M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm2 10h4',
  },
  {
    title: 'White Label',
    desc: 'Launch and scale your own payment solutions with Omnikeea',
    href: '/product/white-label',
    d: 'M3 7h18M3 12h18M3 17h12',
  },
];

const solutionItems = [
  {
    title: 'Optimise payments performance',
    desc: 'Increase acceptance rates and mitigate costs',
    href: '/solution/optimise-payments',
    d: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  },
  {
    title: 'Enhance infrastructure',
    desc: 'Build scalable infrastructure for global payment growth',
    href: '/solution/enhance-infrastructure',
    d: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    title: 'Deliver frictionless global payment experiences',
    desc: 'Create fully branded, global payment journeys',
    href: '/solution/deliver-experiences',
    d: 'M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9-9v18M3 12h18',
  },
  {
    title: 'Protect payments and reduce risk',
    desc: 'Strengthen security and minimise payment risk',
    href: '/solution/protect-payments',
    d: 'M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z',
  },
];

const partnerItems = [
  {
    title: 'Introducer Program',
    desc: 'Refer merchants and unlock new revenue opportunities',
    href: '/partners/introducer-program',
    d: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
];

type NavDropdownItem = { title: string; desc: string; href: string; d: string };

type DropdownLink = {
  href: string;
  label: string;
  items?: NavDropdownItem[];
  viewAllLabel?: string;
  viewAllHref?: string;
  pageDesc?: string;
};

const links: DropdownLink[] = [
  {
    href: '/product',
    label: 'Products',
    items: productItems,
    viewAllLabel: 'View all products',
    viewAllHref: '/product',
    pageDesc: 'Explore Omnikeea\'s comprehensive payment technology platform, including orchestration, dynamic cashier and white label solutions built to optimise performance and scale globally.',
  },
  {
    href: '/solution',
    label: 'Solutions',
    items: solutionItems,
    viewAllLabel: 'View all solutions',
    viewAllHref: '/solution',
    pageDesc: 'Solve complex payment challenges with solutions designed to optimise performance, strengthen infrastructure and deliver seamless, secure global experiences.',
  },
  {
    href: '/partners',
    label: 'Partners',
    items: partnerItems,
    viewAllLabel: 'View all partners',
    viewAllHref: '/partners',
    pageDesc: 'Partner with Omnikeea to deliver and monetise advanced payment solutions through our flexible Introducer programme.',
  },
  { href: '/careers', label: 'Careers' },
];

function DropdownIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="mega-icon-svg">
      <path d={d} />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 4, transition: 'transform 0.2s' }}>
      <path d="M2 3.5L5 6.5L8 3.5" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  }, [pathname]);

  function handleMouseEnter(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 180);
  }

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo" aria-label="Omnikeea — Home">
          <LogoMark />
          <span className="logo-word">Omnikeea</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((l) => (
            <li
              key={l.href}
              className={l.items ? 'nav-has-dropdown' : ''}
              onMouseEnter={l.items ? () => handleMouseEnter(l.label) : undefined}
              onMouseLeave={l.items ? handleMouseLeave : undefined}
            >
              <Link
                href={l.href}
                className={pathname === l.href || pathname.startsWith(l.href + '/') ? 'active' : ''}
              >
                {l.label}
                {l.items && <ChevronDown />}
              </Link>

              {/* Mega dropdown */}
              {l.items && (
                <div
                  className={`mega-dropdown${openDropdown === l.label ? ' open' : ''}`}
                  onMouseEnter={() => handleMouseEnter(l.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mega-inner">
                    {/* Left panel — page title & description */}
                    <div className="mega-left">
                      <h3 className="mega-left-title">{l.label}</h3>
                      <p className="mega-left-desc">{l.pageDesc}</p>
                      <Link href={l.viewAllHref!} className="mega-view-all">
                        {l.viewAllLabel} <span>↗</span>
                      </Link>
                    </div>

                    {/* Right panel — items */}
                    <div className="mega-right">
                      {l.items.map((item) => (
                        <Link href={item.href} key={item.title} className="mega-item">
                          <div className="mega-item-icon">
                            <DropdownIcon d={item.d} />
                          </div>
                          <div className="mega-item-text">
                            <div className="mega-item-title">{item.title}</div>
                            <div className="mega-item-desc">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <Link href="/contact" className="nav-cta">Contact us</Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? <><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></> : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {links.map((l) =>
          l.items ? (
            <div key={l.href} className="mobile-dropdown-group">
              <button
                type="button"
                className={`mobile-dropdown-trigger${mobileExpanded === l.label ? ' expanded' : ''}`}
                onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
              >
                {l.label}
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mobile-chev">
                  <path d="M2 3.5L5 6.5L8 3.5" />
                </svg>
              </button>
              {mobileExpanded === l.label && (
                <div className="mobile-dropdown-items">
                  {l.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="mobile-dropdown-item"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="mega-item-icon" style={{ width: 28, height: 28, borderRadius: 6 }}>
                        <DropdownIcon d={item.d} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <Link href={l.viewAllHref!} className="mobile-view-all" onClick={() => setMobileOpen(false)}>
                    {l.viewAllLabel} ↗
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={pathname === l.href ? 'active' : ''}
            >
              {l.label}
            </Link>
          )
        )}
        <Link href="/contact" onClick={() => setMobileOpen(false)} className={pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
      </div>
    </>
  );
}
