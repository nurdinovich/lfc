'use client'

import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import type { HomeResponse } from './types/home'

export const HOME_QUERY_KEY = 'home'

export const homeQueryFn = async (language: string): Promise<HomeResponse> => {
	const { data } = await requester.get<HomeResponse>('/', {
		params: { language },
	})
	return data
}

export const useHomeQuery = (language: string) => {
	return useQuery<HomeResponse>({
		queryKey: [HOME_QUERY_KEY, language],
		queryFn: () => homeQueryFn(language),
		staleTime: 5 * 60 * 1000,
		gcTime: 30 * 60 * 1000,
		refetchOnWindowFocus: false,
		retry: 1,
	})
}
