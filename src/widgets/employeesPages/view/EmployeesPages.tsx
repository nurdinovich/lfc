'use client'
import { MultiContainer, Typography } from '@/shared/ui'
import { EmployeesCard } from '@/shared/ui/employeesCard/view/EmployeesCard'
import classes from './EmployeesPages.module.scss'
import { useEmployees } from '../api/useEmployees'
import { BASE_URL } from '@/shared/constants/constants'
import { ConsultationStore } from '@/entitles/consultation'
import { useRouter } from 'next/navigation'
import { BreadCrumbs } from '@/shared/ui/breadCrumbs/view/BreadCrumbs'

export const EmployeesPages = () => {
	const router = useRouter()
	const {data} = useEmployees()
	const {setEmployeeId}= ConsultationStore()

	const handleSingUp =(id:number)=> {
		setEmployeeId(id)
		router.push('/consultation')
	}
	return (
		<section className={classes.section}>
			<BreadCrumbs breadCrumbKey='employees'  />
			<MultiContainer>
				<Typography variant='h1' weight='bold' className={classes.title}>
					Сотрудники
				</Typography>
				<div className={classes.container}>
					<div>
						{data && data.length > 0 && (
							<EmployeesCard
								variant='director'
								key={data[0].id}
								image={`${BASE_URL}${data[0].image}`}
								name={data[0].employee_translations[0].full_name}
								position={data[0].employee_translations[0].job}
								branch={data[0].employee_translations[0].branch}
								onClick={()=> handleSingUp(data[0].employee_translations[0].employee_id)}
								alt='Сотрудник'
							/>
						)}
					</div>
					<div className={classes.content}>
						{data
							?.filter(emp => emp.id >= 2 && emp.id <= 5)
							.map(item => (
								<div key={item.id} className={classes.item}>
									<EmployeesCard
										variant='mainCard'
										alt='Сотрудник'
										image={`${BASE_URL}${item.image}`}
										name={item.employee_translations[0].full_name}
										position={item.employee_translations[0].job}
										branch={item.employee_translations[0].branch}
										onClick={()=> handleSingUp(item.employee_translations[0].employee_id)}
									/>
								</div>
							))}
					</div>
				</div>
				<hr />
				<div className={classes.mainBlock}>
					{data
						?.filter(item => item.id >= 6)
						.map(item => (
							<div key={item.id}>
								<EmployeesCard
									variant='mainBlock'
									image={`${BASE_URL}${item.image}`}
									name={item.employee_translations[0].full_name}
									position={item.employee_translations[0].job}
									branch={item.employee_translations[0].branch}
									alt='Сотрудник'
								/>
							</div>
						))}
				</div>
			</MultiContainer>
		</section>
	)
}
