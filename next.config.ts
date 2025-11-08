import type { NextConfig } from 'next'
// import i18n from './src/shared/lib/i18next/i18next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// swcMinify: true,
	// i18n: {
	// 	defaultLocale: 'ru',
	// 	locales: ['ru', 'en', 'de', 'fr'],
	// },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'advokat-region.ru',
			},
			{
				protocol: 'https',
				hostname: 'i.pinimg.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'png.pngtree.com',
			},
			{
				protocol: 'https',
				hostname: 'navro.org',
			},
		],
	},
}

export default nextConfig
