import { useMutation } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { IConsultationRequest } from '../types/types'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { AxiosError } from 'axios'

export const useBookingMutation = (onSuccessCallback?: () => void) => {
	const { t } = useSafeTranslation()

	return useMutation({
		mutationFn: async (
			data: IConsultationRequest & { employee_id: number }
		) => {
			const response = await requester.post(
				`/consultation?employee_id=${data.employee_id}`,
				{
					date: data.date,
					time: data.time,
					full_name: data.full_name,
					company: data.company,
					phone_number: data.phone_number,
					email: data.email,
					description: data.description,
				}
			)
			return response.data
		},

		onSuccess: data => {
			console.log('Ответ сервера:', data)
			onSuccessCallback?.()
		},

		onError: (error: AxiosError<{ message?: string }>) => {
			const message = error.response?.data?.message || t('buttons.anerror')
			alert(message)
		},
	})
}
