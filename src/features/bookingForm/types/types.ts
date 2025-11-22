export interface TimeSlot {
	start: string
	end: string
	available: boolean
}

export interface BookingFormData {
	date: Date | null
	time: string
	fullName: string
	company: string
	phone: string
	email: string
	purpose: string
}

export interface IConsultationRequest {
	date: string // "2025-11-21"
	time: string // "17:02:22.513Z"
	full_name: string // ФИО
	company: string // Компания
	phone_number: string // Должно быть формата "+996 XXX XX-XX-XX"
	email: string // Email
	description: string // Описание/комментарий
}
