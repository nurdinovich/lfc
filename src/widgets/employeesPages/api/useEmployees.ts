'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { EmployeesResponse } from '../types/types'

export const useEmployees = () => {
	const isBrowser = typeof window !== 'undefined'
	return useQuery({
		enabled: isBrowser,
		queryKey: ['employee'],
		queryFn: async () => {
			const { data } = await requester.get<EmployeesResponse>('/employee')
			return data
		},
	})
}
