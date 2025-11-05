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
