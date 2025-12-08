'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { BannersResponse } from '../types/types'

export const useHeroBlock = () => {
	const isBrowser = typeof window !== 'undefined'
	return useQuery({
		enabled: isBrowser,
		queryKey: ['banners'],
		queryFn: async () => {
			const { data } = await requester.get<BannersResponse>('/')
			return data.banners
		},
	})
}
