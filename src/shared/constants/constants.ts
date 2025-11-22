export const routes = {
	home: '/',
	services: '/services',
	about: '/about',
	contact: '/contact',
	news: '/news',
	employees: '/employees',
}

export const links = [
	{ id: 1, name: 'navigation.home', path: routes.home },
	{ id: 2, name: 'navigation.about', path: routes.about },
	{ id: 3, name: 'navigation.services', path: routes.services },
	{ id: 4, name: 'navigation.news', path: routes.news },
	{ id: 5, name: 'navigation.employees', path: routes.employees },
]
export const languages = [
	{
		lang: 'ru',
		name: 'Русский',
	},
	{
		lang: 'kg',
		name: 'Кыргызча',
	},
	{
		lang: 'en',
		name: 'English',
	},
]
export type LanguageCode = (typeof languages)[number]['lang']

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL



