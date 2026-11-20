import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { SITE_URL } from '@/lib/company';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chyianaquia LTD — Integration Technology for Online Platforms',
    template: '%s — Chyianaquia LTD',
  },
  description:
    'Chyianaquia LTD provides technical connectivity tools that help businesses integrate their systems with licensed third-party financial service providers — securely, scalably and globally.',
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><defs><linearGradient id='g' x1='0' y1='0' x2='36' y2='36' gradientUnits='userSpaceOnUse'><stop offset='0%25' stop-color='%235eead4'/><stop offset='55%25' stop-color='%2334d399'/><stop offset='100%25' stop-color='%23f57360'/></linearGradient></defs><rect x='1' y='1' width='34' height='34' rx='9' fill='url(%23g)'/><path d='M23.3 12.7 A7.5 7.5 0 1 0 23.3 23.3' fill='none' stroke='%23fff' stroke-width='2.4' stroke-linecap='round'/><circle cx='25.5' cy='18' r='1.4' fill='%23fff'/></svg>",
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
