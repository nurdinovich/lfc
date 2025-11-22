import axios from 'axios'
import { BASE_URL } from '@/shared/constants/constants'

export const requester = axios.create({
	baseURL: BASE_URL,
})

requester.interceptors.request.use(config => {
	const lang =
		typeof window !== 'undefined'
			? localStorage.getItem('i18nextLng') || 'ru'
			: 'ru'

	config.params = {
		...config.params,
		language: lang,
	}

	return config
})
