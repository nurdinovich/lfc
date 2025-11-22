export interface IFaq {
	id: number
	title: string
	description: string
	language_id: number
	created: string
	updated: string
}
export interface IFaqResponse {
	faqs: IFaq[]
}