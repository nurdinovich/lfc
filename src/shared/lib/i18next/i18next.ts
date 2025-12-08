// src/shared/lib/i18next/i18next.ts
'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// подправь пути, если у тебя иначе
import ru from '@/../public/locales/ru.json'
import en from '@/../public/locales/en.json'
import kg from '@/../public/locales/kg.json'

if (!i18n.isInitialized) {
	i18n.use(initReactI18next).init({
		resources: {
			ru: { translation: ru },
			en: { translation: en },
			kg: { translation: kg },
		},
		lng: 'ru',
		fallbackLng: 'ru',
		supportedLngs: ['ru', 'en', 'kg'],
		debug: process.env.NODE_ENV === 'development',
		interpolation: {
			escapeValue: false,
		},
	})
}

export default i18n
