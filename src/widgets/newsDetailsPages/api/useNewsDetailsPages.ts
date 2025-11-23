import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { INewsItem } from '../types/types'

export const useNewsDetailsPages = (id: number) => {
	return useQuery({
		queryKey: ['news', id],
		queryFn: async () => {
			const { data } = await requester.get<INewsItem[]>(`/news/${id}`)
			return data[0]
		},
		enabled: Boolean(id),
	})
}
