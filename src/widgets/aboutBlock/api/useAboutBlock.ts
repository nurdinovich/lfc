'use client'

import { useQuery } from '@tanstack/react-query'
import type { HomeResponse } from '@/shared/api/types/home'
import { HOME_QUERY_KEY, homeQueryFn } from '@/shared/api/useHomeQuery'

export const useAboutBlock = (language: string) => {
	return useQuery<HomeResponse, Error, HomeResponse['about_us']>({
		queryKey: [HOME_QUERY_KEY, language],
		queryFn: () => homeQueryFn(language),
		select: data => data.about_us,
		staleTime: 5 * 60 * 1000,
	})
}
