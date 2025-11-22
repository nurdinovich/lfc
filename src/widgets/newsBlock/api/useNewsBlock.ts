import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { NewsResponse } from '../types/types'

export const useNewsBlock = () => {
	return useQuery({
		queryKey: ['news'],
		queryFn: async () => {
			const { data } = await requester.get<NewsResponse>('/')
			return data.news
		},
	})
}
