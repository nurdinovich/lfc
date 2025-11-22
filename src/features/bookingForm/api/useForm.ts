import { useMutation } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { IConsultationRequest } from '../types/types'

export const useBookingMutation = () => {
	return useMutation({
		mutationFn: async (data: IConsultationRequest) => {
			const response = await requester.post('/consultation', data)
			return response.data
		},
	})
}
