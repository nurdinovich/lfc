  import { useQuery } from '@tanstack/react-query'
	import { requester } from '@/shared/lib/requester/requester'
	import { INewsItem } from '../types/types'

	export const useNewsPages = () => {
		return useQuery({
			queryKey: ['news'],
			queryFn: async () => {
				const { data } = await requester.get<INewsItem[]>('/news')
				return data
			},
		})
	}
