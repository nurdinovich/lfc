export interface IEmployeeTranslation {
	id: number
	full_name: string
	branch: string
	job: string
	language_id: number
	employee_id: number
	created: string
	updated: string
}

export interface IEmployee {
	id: number
	telegram: string
	image: string
	employee_translations: IEmployeeTranslation[]
}
export type EmployeesResponse = IEmployee[]