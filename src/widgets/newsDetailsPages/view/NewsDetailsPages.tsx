'use client'
import { CustomButton, MultiContainer, Typography } from '@/shared/ui'
import classes from './NewsDetailsPages.module.scss'
import { IconsLeft } from '@/shared/assest/icons'
import Image from 'next/image'
import { useNewsDetailsPages } from '../api/useNewsDetailsPages'
import { BASE_URL } from '@/shared/constants/constants'
import { Loader } from '@/shared/ui/loader/view/Loader'
import { useParams } from 'next/navigation'
import { BreadCrumbs } from '@/shared/ui/breadCrumbs/view/BreadCrumbs'

export const NewsDetailsPages = () => {
	const { id } = useParams()
	const { data, isLoading } = useNewsDetailsPages(Number(id))

	if (isLoading) return <Loader />

	if (!data) {
		return <Typography variant='h1' weight='bold'>Новость не найдена</Typography>
	}

	if (!data.new_translation?.length) {
		return (
			<Typography variant='h1' weight='bold'>
				Переводы новости отсутствуют
			</Typography>
		)
	}
	

	const translation = data.new_translation[0]
	const detail = translation?.new_detail

	return (
		<section className={classes.section}>
			<BreadCrumbs breadCrumbKey='news' thirdElement={translation.title} />
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						{translation.title}
					</Typography>

					<Typography variant='h3' weight='semiBold'>
						{translation.description}
					</Typography>

					<div className={classes.content}>
						<Typography variant='b1' weight='regular'>
							{data.date}
						</Typography>

						<div className={classes.img}>
							<Image
								width={100}
								height={100}
								src={`${BASE_URL}${data.image}`}
								alt={translation.title}
							/>
						</div>
					</div>

					<Typography variant='b1' weight='medium' className={classes.text}>
						{detail?.text}
					</Typography>

					<CustomButton
						variant='primary'
						actionType='link'
						to={'/news'}
						className={classes.btn}
					>
						<span className={classes.icon}>
							<IconsLeft />
						</span>
						Вернуться ко всем новостям
					</CustomButton>
				</div>
			</MultiContainer>
		</section>
	)
}
