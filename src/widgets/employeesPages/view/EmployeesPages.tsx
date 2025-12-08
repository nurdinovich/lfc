'use client'
import { MultiContainer, Typography } from '@/shared/ui'
import { EmployeesCard } from '@/shared/ui/employeesCard/view/EmployeesCard'
import classes from './EmployeesPages.module.scss'
import { useEmployees } from '../api/useEmployees'
import { BASE_URL } from '@/shared/constants/constants'
import { ConsultationStore } from '@/entitles/consultation'
import { useRouter } from 'next/navigation'
import { BreadCrumbs } from '@/shared/ui/breadCrumbs/view/BreadCrumbs'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { Loader } from '@/shared/ui/loader/view/Loader'
import { useEffect, useState } from 'react'

export const EmployeesPages = () => {
	const router = useRouter()
	const { data, isLoading } = useEmployees()
	const { setEmployeeId } = ConsultationStore()
	const { t } = useSafeTranslation()


	const director = data?.find(emp => emp.admin === true)

	const employees = data?.filter(emp => emp.admin !== true) ?? []

	const handleSingUp = (id: number) => {
		setEmployeeId(id)
		router.push('/consultation')
	}
		const [hasMounted, setHasMounted] = useState(false)

		useEffect(() => {
			setHasMounted(true)
		}, [])

		const showLoader = !hasMounted || isLoading
if (showLoader) {
	return <Loader />
}
	return (
		<section className={classes.section}>
			<BreadCrumbs breadCrumbKey='employees' />
			<MultiContainer>
				<Typography variant='h1' weight='bold' className={classes.title}>
					{t('navigation.employees')}
				</Typography>

				<div className={classes.container}>
					<div>
						{director && (
							<EmployeesCard
								variant='director'
								key={director.id}
								image={`${BASE_URL}${director.image}`}
								name={director.employee_translations[0].full_name}
								position={director.employee_translations[0].job}
								branch={director.employee_translations[0].branch}
								onClick={() =>
									handleSingUp(director.employee_translations[0].employee_id)
								}
								alt='Сотрудник'
							/>
						)}
					</div>

					<div className={classes.content}>
						{employees.slice(0, 4).map(item => (
							<div key={item.id} className={classes.item}>
								<EmployeesCard
									variant='mainCard'
									image={`${BASE_URL}${item.image}`}
									name={item.employee_translations[0].full_name}
									position={item.employee_translations[0].job}
									branch={item.employee_translations[0].branch}
									onClick={() =>
										handleSingUp(item.employee_translations[0].employee_id)
									}
									alt='Сотрудник'
								/>
							</div>
						))}
					</div>
				</div>

				<hr />

				{/* 🔥 М mainBlock — остальные сотрудники */}
				<div className={classes.mainBlock}>
					{employees.slice(4).map(item => (
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
