export const routes = {
	home: '/',
	services: '/services',
	about: '/about',
	contact: '/contact',
	news: '/news',
	employees: '/employees',
}

export const links = [
	{ id: 1, name: 'Главная', path: routes.home },
	{ id: 2, name: 'О нас', path: routes.about },
	{ id: 3, name: 'Услуги', path: routes.services },
	{ id: 4, name: 'Новости', path: routes.news },
	{ id: 5, name: 'Сотрудники', path: routes.employees },
]
export const languages = [
	{
		lang: 'ru',
		name: 'Русский',
	},
	{
		lang: 'ky',
		name: 'Кыргызча',
	},
	{
		lang: 'en',
		name: 'English',
	},
]