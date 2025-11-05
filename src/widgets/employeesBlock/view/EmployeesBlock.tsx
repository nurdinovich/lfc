'use client'
import { EmployeesCard } from "@/shared/ui/employeesCard/view/EmployeesCard"
import classes from './EmployeesBlock.module.scss'
import { CustomButton, MultiContainer, Typography } from "@/shared/ui"
import { CustomSwiper } from "@/shared/ui/customSwiper/view/CustomSwiper"
import { SwiperSlide } from "swiper/react"
import { useSafeTranslation } from "@/shared/hooks/useSafeTranslation"
const employees = [
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Nurtilek nurdin uulu',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Рустам Махмутов',
		branch: 'ООО "ЛофтКом"',
		position: 'Директорh',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Рустам Махмутов',
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
		name: 'Рустам Махмутов',
		branch: 'ООО "ЛофтКом"',
		position: 'Директорh',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Рустам Махмутов',
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
		name: 'Рустам Махмутов',
		branch: 'ООО "ЛофтКом"',
		position: 'Директорh',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Рустам Махмутов',
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
		name: 'Рустам Махмутов',
		branch: 'ООО "ЛофтКом"',
		position: 'Директорh',
	},
	{
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		name: 'Рустам Махмутов',
		branch: 'ООО "ЛофтКом"',
		position: 'Директор',
	},
]
export const EmployeesBlock = () => {
	const { t } = useSafeTranslation()
  return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold'>
					{t('block.employees')}
				</Typography>
			</MultiContainer>
			<div className={classes.container}>
				<CustomSwiper spaceBetween={20} slidesPerView={4.5}>
					{employees.map((item, index) => (
						<SwiperSlide key={index}>
							<EmployeesCard
								key={index}
								variant='mainBlock'
								img={item.img}
								name={item.name}
								position={item.position}
								branch={item.branch}
							/>
						</SwiperSlide>
					))}
				</CustomSwiper>
			</div>
			<div className={classes.content}>
				<CustomButton
					variant='primary'
					actionType='link'
					to='employees'
					className={classes.btn}
				>
					Выбрать специалиста
				</CustomButton>
			</div>
		</section>
	)
}
