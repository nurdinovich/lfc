'use client'
import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { ISetting } from '../types/globalTypes'

export const useBaseSetting = () => {
	const isBrowser = typeof window !== 'undefined'

	return useQuery({
		queryKey: ['base_setting'],
		enabled: isBrowser, // 🔴 главное: не дергаем API на сервере
		queryFn: async () => {
			const { data } = await requester.get<ISetting[]>('/base_setting')
			return data
		},
		staleTime: 5 * 60 * 1000, // можно, чтобы не дергать лишний раз
	})
}
