import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { WorkScheduleResponse } from '../types/types'

export const useWorks = () => {
	return useQuery({
		queryKey: ['work_schedules'],
		queryFn: async () => {
			const { data } = await requester.get<WorkScheduleResponse>('/')
			return data.work_schedules
		},
	})
}
