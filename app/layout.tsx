import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  metadataBase: new URL('https://omnikeea.com'),
  title: {
    default: 'Omnikeea LTD — Payment Technology Infrastructure for E-Commerce',
    template: '%s — Omnikeea LTD',
  },
  description:
    'Omnikeea LTD builds advanced software infrastructure that connects e-commerce businesses with licensed payment institutions. Technology-only — non-financial entity.',
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><defs><linearGradient id='g' x1='0' y1='0' x2='36' y2='36' gradientUnits='userSpaceOnUse'><stop offset='0%25' stop-color='%235eead4'/><stop offset='55%25' stop-color='%2334d399'/><stop offset='100%25' stop-color='%23f57360'/></linearGradient></defs><rect x='1' y='1' width='34' height='34' rx='9' fill='url(%23g)'/><circle cx='13.6' cy='18' r='7.2' fill='none' stroke='%23fff' stroke-width='2.4'/><path d='M22.4 11.2 L22.4 24.8 M22.4 18 L28.4 11.4 M22.4 18 L28.4 24.6' stroke='%23fff' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round' fill='none'/><circle cx='13.6' cy='10.8' r='1.4' fill='%23fff'/></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
