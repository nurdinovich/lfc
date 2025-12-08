'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { WorkScheduleResponse } from '../types/types'


export const useWorks = () => {
const isBrowser = typeof window !== 'undefined'
	return useQuery({
		enabled: isBrowser,
		queryKey: ['work_schedules'],
		queryFn: async () => {
			const { data } = await requester.get<WorkScheduleResponse>('/')
			return data.work_schedules
		},
	})
}
