import { cities, services } from '../lib/data'

export default function sitemap() {
  const base = 'https://pages.masloconsulting.com'
  const now = new Date()

  const urls = []
  for (const service of services) {
    for (const city of cities) {
      urls.push({
        url: `${base}/${service.slug}/${city.slug}/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  }

  return urls
}
