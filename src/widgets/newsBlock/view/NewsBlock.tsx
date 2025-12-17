'use client'

import { CustomSwiper } from '@/shared/ui/customSwiper/view/CustomSwiper'
import { SwiperSlide } from 'swiper/react'
import classes from './NewsBlock.module.scss'
import { AnimatedBlock, MultiContainer, NewCard, Typography } from '@/shared/ui'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useNewsBlock } from '../api/useNewsBlock'
import { BASE_URL } from '@/shared/constants/constants'
import Link from 'next/link'

import { motion } from 'framer-motion'

export const NewsBlock = () => {
	const { t } = useSafeTranslation()
	const { data } = useNewsBlock('ru')

	return (
		<section className={classes.section}>
			<MultiContainer>
				{/* Заголовок */}
				<AnimatedBlock animationType='slideUp'>
					<Typography variant='h2' weight='bold'>
						{t('navigation.news')}
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
					<CustomSwiper spaceBetween={20} slidesPerView={3.5}>
						{data?.map((item, index) => (
							<SwiperSlide key={item.id ?? index}>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.4,
										delay: index * 0.1,
									}}
									viewport={{ once: true }}
								>
									<Link href={`/newsDetails/${item.id}`}>
										<NewCard
											variant='mainCard'
											title={item.new_translations?.[0]?.title}
											descriptions={item.new_translations?.[0]?.description}
											date={item.date}
											img={`${BASE_URL}${item.image}`}
										/>
									</Link>
								</motion.div>
							</SwiperSlide>
						))}
					</CustomSwiper>
				</motion.div>
			</AnimatedBlock>
		</section>
	)
}
