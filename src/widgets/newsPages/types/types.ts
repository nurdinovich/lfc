export interface INewsItem {
	id: number
	date: string // или Date, если хочешь потом преобразовать
	image: string
	new_translations: INewsTranslation[]
}

export interface INewsTranslation {
	id: number
	title: string
	description: string
	language_id: number
	new_id: number
	created: string
	updated: string
}
