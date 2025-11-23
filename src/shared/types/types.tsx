export interface IContactTranslation {
	id: number
	contact_id: number
	language_id: number
	city: string
	address: string
	created: string
	updated: string
}

export interface IContact {
	id: number
	maps: string
	phone_number1: string
	phone_number2: string
	contact_translations: IContactTranslation[]
}

export interface IContactsResponse {
	contacts: IContact[]
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
