import { MetadataRoute } from 'next'
import { servicesData } from '@/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  // Ganti URL ini dengan domain asli Anda saat sudah punya domain (.com / .id)
  const baseUrl = 'https://ruangweb.vercel.app'; 
  
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
