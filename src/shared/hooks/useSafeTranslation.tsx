// src/shared/hooks/useSafeTranslation.ts
'use client'

import { useTranslation } from 'react-i18next'

interface TranslationOptions {
	[key: string]: unknown
}

export const useSafeTranslation = () => {
	const { t } = useTranslation()

	const safeT = (key: string, options?: TranslationOptions): string => {
		return t(key, options)
	}

	return { t: safeT }
}
