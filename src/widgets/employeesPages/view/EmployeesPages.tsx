import { MultiContainer, Typography } from '@/shared/ui'
import { EmployeesCard } from '@/shared/ui/employeesCard/view/EmployeesCard'
import classes from './EmployeesPages.module.scss'
const employees = [
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
]
const employeess = [
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
]
const employeesst = [
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
]
export const EmployeesPages = () => {
	return (
		<section className={classes.section}>
			<MultiContainer>
					<Typography variant='h1' weight='bold' className={classes.title}>
						Сотрудники
					</Typography>
				<div className={classes.container}>
					{employees.map((item, index) => (
						<div key={index}>
							<EmployeesCard
								variant='director'
								key={index}
								img={item.img}
								name={item.name}
								position={item.position}
								branch={item.branch}
							/>
						</div>
					))}
					<div className={classes.content}>
						{employeess.map((item, index) => (
							<div key={index}>
								<EmployeesCard
									variant='mainCard'
									key={index}
									img={item.img}
									name={item.name}
									position={item.position}
									branch={item.branch}
								/>
							</div>
						))}
					</div>
				</div>
				<hr />
				<div className={classes.mainBlock}>
					{employeesst.map((item, index) => (
						<div key={index}>
							<EmployeesCard
								variant='mainBlock'
								key={index}
								img={item.img}
								name={item.name}
								position={item.position}
								branch={item.branch}
							/>
						</div>
					))}
				</div>
			</MultiContainer>
		</section>
	)
}
