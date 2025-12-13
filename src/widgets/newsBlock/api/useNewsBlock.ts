import { useQuery } from '@tanstack/react-query'
import type { HomeResponse } from '@/shared/api/types/home'
import { HOME_QUERY_KEY, homeQueryFn } from '@/shared/api/useHomeQuery'

export const useNewsBlock = (language: string) => {
	return useQuery<HomeResponse, Error, HomeResponse['news']>({
		queryKey: [HOME_QUERY_KEY, language],
		queryFn: () => homeQueryFn(language),
		select: data => data.news,
		staleTime: 5 * 60 * 1000,
		refetchOnWindowFocus: false,
	})
}
