'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { IFaqResponse } from '../types/types'

export const useFaqBlock = () => {
	const isBrowser = typeof window !== 'undefined'
	return useQuery({
		enabled: isBrowser,
		queryKey: ['faqs'],
		queryFn: async () => {
			const { data } = await requester.get<IFaqResponse>('/')
			return data.faqs
		},
	})
}
