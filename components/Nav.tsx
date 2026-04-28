'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogoMark from './LogoMark';

const links = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/technology', label: 'Technology' },
  { href: '/industries', label: 'Industries' },
  { href: '/company', label: 'Company' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo" aria-label="Omnikeea — Home">
          <LogoMark />
          <span className="logo-word">Omnikeea</span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="nav-cta">Get in Touch</Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></> : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>}
          </svg>
        </button>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={pathname === l.href ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)} className={pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
      </div>
    </>
  );
}
