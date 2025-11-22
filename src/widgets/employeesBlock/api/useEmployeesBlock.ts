import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { EmployeesResponse } from '../types/types'

export const useEmployeesBlock = () => {
	return useQuery({
		queryKey: ['employee'],
		queryFn: async () => {
			const { data } = await requester.get<EmployeesResponse>('/')
			return data.employee
		},
	})
}
