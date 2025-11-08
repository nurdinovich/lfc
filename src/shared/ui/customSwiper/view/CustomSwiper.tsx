'use client'
import { Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './customPagination.scss'
import { FC } from 'react'
import { ISlider } from '../types/types'
import classNames from 'classnames'

export const CustomSwiper: FC<ISlider> = ({
	children,
	className,
	spaceBetween,
	slidesPerView,
}) => {
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			spaceBetween={spaceBetween}
			slidesPerView={'auto'}
			className={classNames(className, 'custom-swiper')}
			slidesPerGroup={5}
			loop={true}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			pagination={{
				el: '.custom-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return `<span class="${className}"></span>`
				},
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
			<div className='custom-pagination'></div>
		</Swiper>
	)
}
