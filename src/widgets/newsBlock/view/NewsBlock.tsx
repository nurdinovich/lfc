'use client'
import { CustomSwiper } from "@/shared/ui/customSwiper/view/CustomSwiper"
import { SwiperSlide } from "swiper/react"
import classes from './NewsBlock.module.scss'
import { MultiContainer, NewCard, Typography } from "@/shared/ui"
import { useSafeTranslation } from "@/shared/hooks/useSafeTranslation"

const data = [
	{
		title: 'Ошский городской кенеш утвердил постановление № 80',
		description:
			'Полномочия изымать землю для общественных нужд у городского кенеша действительно есть.',
		date: '01.01.2023',
	},
	{
		title: 'Новость 2',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
	{
		title: 'Новость 3',
		description: 'Описание новости 3',
		date: '01.01.2023',
	},
	{
		title: 'Новость 4',
		description:
			'Полномочия изымать землю для общественных нужд у городского кенеша действительно есть.',
		date: '01.01.2023',
	},
	{
		title: 'Новость 5',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
	{
		title: 'Новость 5',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
	{
		title: 'Новость 5',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
	{
		title: 'Новость 5',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
]
export const NewsBlock = () => {
	const {t} = useSafeTranslation()
  return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold'>
					{t('navigation.news')}
				</Typography>
			</MultiContainer>
			<div className={classes.container}>
				<CustomSwiper spaceBetween={20} slidesPerView={3.5}>
					{data.map((item, index) => (
						<SwiperSlide key={index}>
							<NewCard
								variant='mainCard'
								title={item.title}
								descriptions={item.description}
								date={item.date}
								img={
									'https://i.pinimg.com/474x/bd/a8/0e/bda80e9324bd6d5c83b84b6eac5a1e5d.jpg'
								}
							/>
						</SwiperSlide>
					))}
				</CustomSwiper>
			</div>
		</section>
	)
}

