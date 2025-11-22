export interface Language {
	id: number
	name: string
	code: string
	created: string
	updated: string
}

export interface BannerInfo {
	id: number
	created: string
	updated: string
	image: string
}

export interface BannerItem {
	title: string
	banner_id: number
	language_id: number
	created: string
	updated: string
	id: number
	description: string
	language: Language
	banner: BannerInfo
}

export interface BannersResponse {
	banners: BannerItem[]
}
