import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://omnikeea.com';
  const routes = ['', '/solutions', '/technology', '/industries', '/company', '/contact', '/legal/privacy', '/legal/terms'];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
