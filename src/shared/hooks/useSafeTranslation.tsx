'use client'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface TranslationOptions {
	[key: string]: unknown
}

export const useSafeTranslation = () => {
	const { t } = useTranslation()
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsClient(true)
		}, 0)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	const safeT = (key: string, options?: TranslationOptions): string => {
		if (!isClient) {
			return ''
		}
		return t(key, options)
	}

	return { t: safeT }
}
