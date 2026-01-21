import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date().toISOString()

	return [
		{
			url: 'https://lfc.kg',
			lastModified,
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://lfc.kg/services',
			lastModified,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: 'https://lfc.kg/about',
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://lfc.kg/news',
			lastModified,
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://lfc.kg/employees',
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://lfc.kg/consultation',
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]
}
