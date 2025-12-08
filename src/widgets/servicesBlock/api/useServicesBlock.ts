'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { ServicesResponse } from '../types/types'

export const useServicesBlock = () => {
	const isBrowser = typeof window !== 'undefined'
	return useQuery({
		enabled: isBrowser,
		staleTime: 5 * 60 * 1000,
		queryKey: ['services'],
		queryFn: async () => {
			const { data } = await requester.get<ServicesResponse>('/')
			return data.services
		},
	})
}
