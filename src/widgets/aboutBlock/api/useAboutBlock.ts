import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { AboutUsResponse } from '../types/types'

export const useAboutBlock = () => {
	return useQuery({
		queryKey: ['about_us'],
		queryFn: async () => {
			const { data } = await requester.get<AboutUsResponse>('/')
			return data.about_us
		},
	})
}
