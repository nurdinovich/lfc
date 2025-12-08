import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '159.223.28.248',
			},
		],
	},
}

export default nextConfig
