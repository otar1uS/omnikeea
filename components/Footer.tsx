import Link from 'next/link';
import LogoMark from './LogoMark';
import { SANCTIONED_COUNTRIES } from '@/lib/sanctions';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-cta-row">
          <div>
            <h3 className="h3">Have a question for our technical team?</h3>
            <p className="lead">Reach out and we will get back to you.</p>
          </div>
          <Link href="/contact" className="btn btn-primary">Contact us</Link>
        </div>

        <div className="footer-line" />

        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
              <LogoMark />
              <span className="logo-word">Omnikeea</span>
            </Link>
            <p className="footer-desc">
              Advanced integration technology for online platforms — software infrastructure that connects business systems with licensed third-party financial service providers.
            </p>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              <li><Link href="/product">Product</Link></li>
              <li><Link href="/solution">Solution</Link></li>
              <li><Link href="/partners">For Partners</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><Link href="/legal/privacy">Privacy Policy</Link></li>
              <li><Link href="/legal/terms">Terms of Services</Link></li>
              <li><Link href="/legal/cookies">Cookie Policy</Link></li>
              <li><Link href="/legal/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:contact@omnikeea.com">contact@omnikeea.com</a></li>
              <li><Link href="/contact">Enquiry form</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-line" />

        <div className="footer-sanctions">
          <div className="footer-sanctions-label">Compliance Notice</div>
          <ul className="footer-sanctions-text" style={{ listStyle: 'disc', paddingLeft: 20, margin: 0, display: 'grid', gap: 6 }}>
            <li>Omnikeea LTD is a pure technology provider. We do not process, store, transmit, or handle financial transactions.</li>
            <li>All regulated financial services are performed exclusively by licensed third-party institutions.</li>
            <li>Our role is limited to providing software tools and integration technology.</li>
          </ul>
        </div>

        <div className="footer-line" />

        <div className="footer-sanctions">
          <div className="footer-sanctions-label">Restricted Territories — Services Not Available In</div>
          <div className="footer-sanctions-text">{SANCTIONED_COUNTRIES.join(' · ')}</div>
        </div>

        <div className="footer-line" />

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Omnikeea LTD. All rights reserved.</div>
          <div className="footer-legal">
            <Link href="/legal/privacy">Privacy Policy</Link>
            <Link href="/legal/terms">Terms of Services</Link>
            <Link href="/legal/cookies">Cookie Policy</Link>
            <Link href="/legal/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
