import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://college.odinschool.com';

  const staticPages = [
    '',
    '/data-analyst-course',
    '/ai-analyst-course', // example page
  ];

  const allPaths = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return allPaths;
}
