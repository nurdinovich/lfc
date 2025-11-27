'use client'
import { CustomSwiper } from "@/shared/ui/customSwiper/view/CustomSwiper"
import { SwiperSlide } from "swiper/react"
import classes from './NewsBlock.module.scss'
import { MultiContainer, NewCard, Typography } from "@/shared/ui"
import { useSafeTranslation } from "@/shared/hooks/useSafeTranslation"
import { useNewsBlock } from "../api/useNewsBlock"
import { BASE_URL } from "@/shared/constants/constants"
import Link from "next/link"

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
							<Link href={`/newsDetails/${item.id}`}>
								<NewCard
									variant='mainCard'
									title={item.new_translations?.[0]?.title}
									descriptions={item.new_translations?.[0]?.description}
									date={item.date}
									img={`${BASE_URL}${item.image}`}
								/>
							</Link>
						</SwiperSlide>
					))}
				</CustomSwiper>
			</div>
		</section>
	)
}

