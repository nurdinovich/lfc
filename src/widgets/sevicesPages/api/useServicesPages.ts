'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { ServiceItem } from '../types/types'

export const useServicesPages = () => {
	const isBrowser = typeof window !== 'undefined'

	return useQuery({
		queryKey: ['services'],
		enabled: isBrowser,
		staleTime: 5 * 60 * 1000, // кэш 5 минут
		queryFn: async () => {
			const { data } = await requester.get<ServiceItem[]>('/services')
			return data
		},
	})
}

