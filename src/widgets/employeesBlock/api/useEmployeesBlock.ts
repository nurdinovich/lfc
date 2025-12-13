import { useQuery } from '@tanstack/react-query'
import type { HomeResponse } from '@/shared/api/types/home'
import { HOME_QUERY_KEY, homeQueryFn } from '@/shared/api/useHomeQuery'

export const useEmployeesBlock = (language: string) => {
	return useQuery<HomeResponse, Error, HomeResponse['employee']>({
		queryKey: [HOME_QUERY_KEY, language],
		queryFn: () => homeQueryFn(language),
		select: data => data.employee,
		staleTime: 5 * 60 * 1000,
	})
}
