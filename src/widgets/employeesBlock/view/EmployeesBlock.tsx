'use client'

import { EmployeesCard } from '@/shared/ui/employeesCard/view/EmployeesCard'
import classes from './EmployeesBlock.module.scss'
import { AnimatedBlock, CustomButton, MultiContainer, Typography } from '@/shared/ui'
import { CustomSwiper } from '@/shared/ui/customSwiper/view/CustomSwiper'
import { SwiperSlide } from 'swiper/react'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useEmployeesBlock } from '../api/useEmployeesBlock'
import { BASE_URL } from '@/shared/constants/constants'

import { motion } from 'framer-motion'

export const EmployeesBlock = () => {
	const { t } = useSafeTranslation()
	const { data } = useEmployeesBlock('ru')

	return (
		<section className={classes.section}>
			<MultiContainer>
				{/* Заголовок */}
				<AnimatedBlock animationType='slideUp'>
					<Typography variant='h2' weight='bold'>
						{t('block.employees')}
					</Typography>
				</AnimatedBlock>
			</MultiContainer>

			{/* Слайдер */}
			<AnimatedBlock animationType='none' delay={0.2}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className={classes.container}
				>
					<CustomSwiper spaceBetween={20} slidesPerView={4.5}>
						{data?.map((item, index) => {
							const translation = item.employee_translations?.[0]

							return (
								<SwiperSlide key={item.id ?? index}>
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.4,
											delay: index * 0.1,
										}}
										viewport={{ once: true }}
										whileHover={{
											y: -6,
											transition: { duration: 0.2 },
										}}
									>
										<EmployeesCard
											variant='mainBlock'
											image={`${BASE_URL}${item.image}`}
											alt={translation?.full_name || 'Сотрудник'}
											name={translation?.full_name}
											position={translation?.job}
											branch={translation?.branch}
										/>
									</motion.div>
								</SwiperSlide>
							)
						})}
					</CustomSwiper>
				</motion.div>
			</AnimatedBlock>

			{/* Кнопка */}
			<AnimatedBlock animationType='slideUp' delay={0.3}>
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
			</AnimatedBlock>
		</section>
	)
}
