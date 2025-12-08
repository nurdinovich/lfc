'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { IAboutUsItem } from '../types/types'


export const useAboutPages = () => {
	const isBrowser = typeof window !== 'undefined'
	return useQuery({
		enabled: isBrowser,
		queryKey: ['about_us'],
		queryFn: async () => {
			const { data } = await requester.get<IAboutUsItem[]>('/about_us')
			return data
		},
	})
}
