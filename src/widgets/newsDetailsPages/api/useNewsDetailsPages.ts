'use client'

import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { INewsItem } from '../types/types'

export const useNewsDetailsPages = (id: number) => {
	const isBrowser = typeof window !== 'undefined'

	return useQuery({
		queryKey: ['news', id],
		enabled: isBrowser && Boolean(id), // 🔥 ключевой фикс
		queryFn: async () => {
			const { data } = await requester.get<INewsItem[]>(`/news/${id}`)
			return data[0]
		},
		staleTime: 5 * 60 * 1000,
	})
}
