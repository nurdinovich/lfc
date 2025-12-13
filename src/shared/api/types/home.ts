// src/shared/api/types/home.ts

export interface BannerFile {
	id: number
	image: string
	created: string
	updated: string
}

export interface Banner {
	id: number
	title: string
	description: string
	banner_id: number
	language_id: number
	created: string
	updated: string
	banner: BannerFile
}

export interface AboutUs {
	id: number
	title1: string
	title2: string
	title3: string
	title4: string
	number1: string
	number2: string
	number3: string
	number4: string
	description: string
	language_id: number
	created: string
	updated: string
}

export interface ServiceDescription {
	id: number
	description: string
	created: string
	updated: string
}

export interface Service {
	id: number
	title: string
	descriptions: ServiceDescription[]
}

export interface NewsTranslation {
	id: number
	title: string
	description: string
	language_id: number
	new_id: number
	created: string
	updated: string
}

export interface News {
	id: number
	date: string
	image: string
	new_translations: NewsTranslation[]
}

export interface EmployeeTranslation {
	id: number
	full_name: string
	branch: string
	job: string
	language_id: number
	employee_id: number
	created: string
	updated: string
}

export interface Employee {
	id: number
	telegram: string
	admin: boolean
	image: string
	employee_translations: EmployeeTranslation[]
}

export interface WorkSchedule {
	id: number
	working_hours: string
	working_days: string
	weekend: string
}

export interface ContactTranslation {
	id: number
	city: string
	address: string
	contact_id: number
	language_id: number
	created: string
	updated: string
}

export interface Contact {
	id: number
	maps: string
	phone_number1: string
	phone_number2: string
	contact_translations: ContactTranslation[]
}

export interface Faq {
	id: number
	title: string
	description: string
	language_id: number
	created: string
	updated: string
}

/**
 * 👇 ГЛАВНЫЙ ТИП ДЛЯ ГЛАВНОЙ СТРАНИЦЫ
 */
export interface HomeResponse {
	banners: Banner[]
	about_us: AboutUs[]
	services: Service[]
	news: News[]
	employee: Employee[]
	work_schedules: WorkSchedule[]
	contacts: Contact[]
	faqs: Faq[]
}
