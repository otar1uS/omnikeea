import Link from 'next/link';
import LogoMark from './LogoMark';
import { SANCTIONED_COUNTRIES } from '@/lib/sanctions';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
              <LogoMark />
              <span className="logo-word">Omnikeea</span>
            </Link>
            <p className="footer-desc">
              Advanced software infrastructure for e-commerce businesses and payment technology integration. Technology-only. Non-financial entity.
            </p>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/company">About</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Platform</h5>
            <ul>
              <li><Link href="/solutions#api">API Connectivity</Link></li>
              <li><Link href="/solutions#orchestration">Orchestration</Link></li>
              <li><Link href="/solutions#analytics">Analytics</Link></li>
              <li><Link href="/solutions#data">Data Exchange</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:contact@omnikeea.com">contact@omnikeea.com</a></li>
              <li><Link href="/contact">Enquiry Form</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-line" />

        <div className="footer-sanctions">
          <div className="footer-sanctions-label">Restricted Territories — Services Not Available In</div>
          <div className="footer-sanctions-text">{SANCTIONED_COUNTRIES.join(' · ')}</div>
        </div>

        <div className="footer-line" />

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Omnikeea LTD. All rights reserved. Technology provider only — not a financial institution.</div>
          <div className="footer-legal">
            <Link href="/legal/privacy">Privacy Policy</Link>
            <Link href="/legal/terms">Terms of Service</Link>
            <Link href="/legal/privacy">Legal Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
