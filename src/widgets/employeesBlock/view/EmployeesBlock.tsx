'use client'
import { EmployeesCard } from "@/shared/ui/employeesCard/view/EmployeesCard"
import classes from './EmployeesBlock.module.scss'
import { CustomButton, MultiContainer, Typography } from "@/shared/ui"
import { CustomSwiper } from "@/shared/ui/customSwiper/view/CustomSwiper"
import { SwiperSlide } from "swiper/react"
import { useSafeTranslation } from "@/shared/hooks/useSafeTranslation"
import { useEmployeesBlock } from "../api/useEmployeesBlock"
import { BASE_URL } from "@/shared/constants/constants"

export const EmployeesBlock = () => {
	const { t } = useSafeTranslation()
	const {data} = useEmployeesBlock('ru')
	
  return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold'>
					{t('block.employees')}
				</Typography>
			</MultiContainer>
			<div className={classes.container}>
				<CustomSwiper spaceBetween={20} slidesPerView={4.5}>
					{data?.map((item, index) => {
						const translation = item.employee_translations?.[0] 
						return (
							<SwiperSlide key={index}>
								<EmployeesCard
									variant='mainBlock'
									image={`${BASE_URL}${item.image}`}
									alt={translation?.full_name || 'Сотрудник'}
									name={translation?.full_name}
									position={translation?.job}
									branch={translation?.branch}
								/>
							</SwiperSlide>
						)
					})}
				</CustomSwiper>
			</div>
			<div className={classes.content}>
				<CustomButton
					variant='primary'
					actionType='link'
					to='/employees'
					className={classes.btn}
				>
					{t('buttons.choose')}
				</CustomButton>
			</div>
		</section>
	)
}
