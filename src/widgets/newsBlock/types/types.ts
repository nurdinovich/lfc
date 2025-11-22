export interface NewsTranslation {
	id: number
	title: string
	description: string
	language_id: number
	new_id: number
	created: string
	updated: string
}

export interface NewsItem {
	id: number
	date: string
	image: string
	new_translations: NewsTranslation[]
}

export interface NewsResponse {
	news: NewsItem[]
}
