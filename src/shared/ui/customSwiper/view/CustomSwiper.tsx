'use client'

import { Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './customPagination.scss'

import { FC } from 'react'
import classNames from 'classnames'
import { ISlider } from '../types/types'

export const CustomSwiper: FC<ISlider> = ({
	children,
	className,
	spaceBetween,
}) => {
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			className={classNames(className, 'custom-swiper')}
			slidesPerView='auto'
			spaceBetween={spaceBetween}
			loop
			slidesPerGroup={1}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			/** 🔑 ВАЖНО ДЛЯ СКРОЛЛА */
			direction='horizontal'
			touchStartPreventDefault={false}
			touchMoveStopPropagation={false}
			touchReleaseOnEdges={true}
			resistanceRatio={0.85}
			simulateTouch={true}
			/** ⬇️ Главное */
			nested={true}
			pagination={{
				el: '.custom-pagination',
				clickable: true,
				renderBullet: (index, className) =>
					`<span class="${className}"></span>`,
			}}
			breakpoints={{
				0: {
					spaceBetween: 16,
				},
				660: {
					spaceBetween: spaceBetween ?? 30,
				},
			}}
		>
			{children}
			<div className='custom-pagination' />
		</Swiper>
	)
}
