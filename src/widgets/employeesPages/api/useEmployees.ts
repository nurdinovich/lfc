import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { EmployeesResponse } from '../types/types'


export const useEmployees = () => {
	return useQuery({
		queryKey: ['employee'],
		queryFn: async () => {
			const { data } = await requester.get<EmployeesResponse>('/employee')
			return data
		},
	})
}
