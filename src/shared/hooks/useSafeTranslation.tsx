'use client'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export const useSafeTranslation = () => {
	const { t, i18n } = useTranslation()
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	const safeT = (key: string, options?: any): string => {
		if (!isClient) {
			return key
		}
		const result = t(key, options)
		return typeof result === 'string' ? result : String(result)
	}

	return { t: safeT, i18n, isClient }
}
