import { useQuery } from '@tanstack/react-query'
import { requester } from '@/shared/lib/requester/requester'
import { ISetting } from '../types/globalTypes'


export const useBaseSetting = () => {
	return useQuery({
		queryKey: ['base_setting'],
		queryFn: async () => {
			const { data } = await requester.get<ISetting[]>(
        '/base_setting'
      )
      return data
		},
	})
}
