export interface Language {
	id: number
	name: string
	code: string
	created: string
	updated: string
}

export interface ServiceDescription {
	id: number
	description: string
	created: string
	updated: string
}

export interface ServiceItem {
	id: number
	title: string
	language: Language
	descriptions: ServiceDescription[]
}

export interface ServicesResponse {
	services: ServiceItem[]
}
