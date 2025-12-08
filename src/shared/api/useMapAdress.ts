'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { IContactsResponse } from '../types/types'

export const useMapAdress = () => {
	const isBrowser = typeof window !== 'undefined'
	return useQuery({
		enabled: isBrowser,
		queryKey: ['contacts'],
		queryFn: async () => {
			const { data } = await requester.get<IContactsResponse>('/')
			return data.contacts
		},
	})
}
