import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { ContactsResponse } from '../types/types'

export const useMapAdress = () => {
	return useQuery({
		queryKey: ['contacts'],
		queryFn: async () => {
			const { data } = await requester.get<ContactsResponse>('/')
			return data.contacts
		},
	})
}
