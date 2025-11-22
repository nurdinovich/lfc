'use client'
import { CustomSwiper } from "@/shared/ui/customSwiper/view/CustomSwiper"
import { SwiperSlide } from "swiper/react"
import classes from './NewsBlock.module.scss'
import { MultiContainer, NewCard, Typography } from "@/shared/ui"
import { useSafeTranslation } from "@/shared/hooks/useSafeTranslation"
import { useNewsBlock } from "../api/useNewsBlock"
import { BASE_URL } from "@/shared/constants/constants"

// const data = [
// 	{
// 		title: 'Ошский городской кенеш утвердил постановление № 80',
// 		description:
// 			'Полномочия изымать землю для общественных нужд у городского кенеша действительно есть.',
// 		date: '01.01.2023',
// 	},
// 	{
// 		title: 'Новость 2',
// 		description: 'Описание новости 2',
// 		date: '01.01.2023',
// 	},
// 	{
// 		title: 'Новость 3',
// 		description: 'Описание новости 3',
// 		date: '01.01.2023',
// 	},
// 	{
// 		title: 'Новость 4',
// 		description:
// 			'Полномочия изымать землю для общественных нужд у городского кенеша действительно есть.',
// 		date: '01.01.2023',
// 	},
// 	{
// 		title: 'Новость 5',
// 		description: 'Описание новости 2',
// 		date: '01.01.2023',
// 	},
// 	{
// 		title: 'Новость 5',
// 		description: 'Описание новости 2',
// 		date: '01.01.2023',
// 	},
// 	{
// 		title: 'Новость 5',
// 		description: 'Описание новости 2',
// 		date: '01.01.2023',
// 	},
// 	{
// 		title: 'Новость 5',
// 		description: 'Описание новости 2',
// 		date: '01.01.2023',
// 	},
// ]
export const NewsBlock = () => {
	const {t} = useSafeTranslation()
	const {data} = useNewsBlock()
  return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold'>
					{t('navigation.news')}
				</Typography>
			</MultiContainer>
			<div className={classes.container}>
				<CustomSwiper spaceBetween={20} slidesPerView={3.5}>
					{data?.map((item, index) => (
						<SwiperSlide key={index}>
							<NewCard
								variant='mainCard'
								title={item.new_translations?.[0]?.title}
								descriptions={item.new_translations?.[0]?.description}
								date={item.date}
								img={`${BASE_URL}${data?.[0]?.image}`}
							/>
						</SwiperSlide>
					))}
				</CustomSwiper>
			</div>
		</section>
	)
}

