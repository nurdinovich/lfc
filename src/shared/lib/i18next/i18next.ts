import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-fs-backend'
import { i18nConfig } from './settings'
import path from 'path'

export async function initI18n(locale: string) {
	await i18next
		.use(initReactI18next)
		.use(Backend)
		.init({
			lng: locale,
			fallbackLng: i18nConfig.defaultLocale,
			supportedLngs: i18nConfig.locales,
			backend: {
				loadPath: path.resolve(
					'./src/app/i18n/locales/{{lng}}/translation.json'
				),
			},
			react: { useSuspense: false },
		})

	return i18next
}
