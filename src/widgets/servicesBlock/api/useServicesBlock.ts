import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { ServicesResponse } from '../types/types'

export const useServicesBlock = () => {
	return useQuery({
		queryKey: ['services'],
		queryFn: async () => {
			const { data } = await requester.get<ServicesResponse>('/')
			return data.services
		},
	})
}
