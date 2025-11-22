export interface ILanguage {
	id: number
	name: string
	code: string
	created: string
	updated: string
}

export interface IAboutUsItem {
	id: number
	image1: string
	image2: string
	our_history: string
	about_us: string
	language_id: number
	created: string
	updated: string
	language: ILanguage
}
export type AboutUsResponse = IAboutUsItem[]