import { MetadataRoute } from 'next'
import { servicesData } from '@/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  // Domain utama website Anda
  const baseUrl = 'https://ruangweb.layanankita.web.id'; 
  
  const servicesUrls = servicesData.map((service) => ({
    url: `${baseUrl}/layanan/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...servicesUrls,
  ]
}
