import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://omnikeea.com';
  const routes = [
    '',
    '/product',
    '/solution',
    '/partners',
    '/careers',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
    '/legal/disclaimer',
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
