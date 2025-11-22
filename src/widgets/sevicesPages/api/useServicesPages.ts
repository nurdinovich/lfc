import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { ServiceItem } from '../types/types'

export const useServicesPages = () => {
	return useQuery({
		queryKey: ['services'],
		queryFn: async () => {
			const { data } = await requester.get<ServiceItem[]>('/services')
			return data
		},
	})
}
