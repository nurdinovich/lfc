export interface EmployeeTranslation {
	id: number
	full_name: string
	branch: string
	language_id: number
	employee_id: number
	job: string
	created: string
	updated: string
}

export interface EmployeeItem {
	id: number
	telegram: string
	image: string
	employee_translations: EmployeeTranslation[]
}

export interface EmployeesResponse {
	employee: EmployeeItem[]
}
