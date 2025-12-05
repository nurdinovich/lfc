
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'

export interface DateAvailability {
	available_times: string[]
	unavailable_times: string[]
}

export interface AvailableResponse {
	unavailable_dates: string[]
	[date: string]: DateAvailability | string[] 
}

const formatDate = (d: Date | null) => {
	if (!d) return ''
	const date = new Date(d)
	return `${date.getFullYear()}-${(date.getMonth() + 1)
		.toString()
		.padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
}

export const useAvailable = (
	employeeId?: number | null,
	selectedDate?: Date | null
) => {
	const formattedDate = formatDate(selectedDate ?? null)

	const query = useQuery({
		queryKey: ['available', employeeId, formattedDate],
		enabled: Boolean(employeeId) && Boolean(formattedDate),
		queryFn: async () => {
			const { data } = await requester.get<AvailableResponse>(
				`/consultation/available?employee_id=${employeeId}`
			)
			return data
		},
		staleTime: 5 * 60 * 1000,
	})

	const dayData =
		query.data && formattedDate
			? (query.data[formattedDate] as DateAvailability | undefined)
			: undefined

	return {
		data: query.data,
		availableTimes: dayData?.available_times ?? [],
		unavailableTimes: dayData?.unavailable_times ?? [],
		isLoading: query.isLoading,
		isError: query.isError,
		error: query.error as Error | null,
	}
}

