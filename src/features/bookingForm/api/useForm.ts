import { useMutation } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { IConsultationRequest } from '../types/types'

export const useBookingMutation = () => {
	return useMutation({
		mutationFn: async (data: IConsultationRequest  & { employee_id: number }) => {
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
		onSuccess: (data) => {
			alert('Запись успешно создана!');
			console.log('Ответ сервера:', data);
		},
		onError: () => {
			alert('Произошла ошибка при создании записи.');
		},
	})
}
