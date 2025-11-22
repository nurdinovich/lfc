export interface Language {
	id: number
	name: string
	code: string
	created: string
	updated: string
}

export interface AboutUsItem {
	id: number
	language_id: number
	language: Language
	title1: string
	title2: string
	title3: string
	title4: string
	number1: string
	number2: string
	number3: string
	number4: string
	description: string
	created: string
	updated: string
}

export interface AboutUsResponse {
	about_us: AboutUsItem[]
}
