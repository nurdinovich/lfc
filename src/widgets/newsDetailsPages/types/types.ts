export interface INewsItem {
	id: number
	date: string
	image: string
	new_translation: INewsTranslation[]
}

export interface INewsTranslation {
	id: number
	title: string
	description: string
	language_id: number
	new_id: number
	created: string
	updated: string
	language: ILanguage
	new_detail: INewsDetail
}

export interface ILanguage {
	id: number
	name: string
	code: string
	created: string
	updated: string
}

export interface INewsDetail {
	id: number
	text: string
	new_translation_id: number
	created: string
	updated: string
	link: string
}
