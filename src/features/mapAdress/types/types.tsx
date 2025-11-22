export interface ILocations {
	city: string
	adress: string
	phone: string[]
  map: string
}
export interface ContactTranslation {
	// Если позже появятся переводы, можно добавить поля здесь
	id: number
	language_id: number
	contact_id: number
	description?: string
	created: string
	updated: string
}

export interface ContactItem {
	id: number
	maps: string
	phone_number1: string
	phone_number2: string
	contact_translations: ContactTranslation[]
}

export interface ContactsResponse {
	contacts: ContactItem[]
}

export interface IWorkSchedule {
	id: number
	working_days: string
	weekend: string
	working_hours: string
	language_id: number
	created: string
	updated: string
}
export interface WorkScheduleResponse {
	work_schedules: IWorkSchedule[]
}
