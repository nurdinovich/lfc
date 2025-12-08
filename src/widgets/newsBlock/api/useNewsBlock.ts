'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { NewsResponse } from '../types/types'

export const useNewsBlock = () => {
	const isBrowser = typeof window !== 'undefined'
	
	return useQuery({
		enabled: isBrowser,
		staleTime: 5 * 60 * 1000,
		queryKey: ['news'],
		queryFn: async () => {
			const { data } = await requester.get<NewsResponse>('/')
			return data.news
		},
	})
}
