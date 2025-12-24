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
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { Error } from '@/shared/ui/error/view/Error'
import Linkify from 'react-linkify'
import { getYoutubeEmbedUrl } from '@/shared/lib/youtube/getYoutubeEmbedUrl'

export const NewsDetailsPages = () => {
	const { id } = useParams()
	const { data, isLoading } = useNewsDetailsPages(Number(id))
	const { t } = useSafeTranslation()

	if (isLoading) return <Loader />
	if (!data) return <Error />

	const translation = data.new_translation[0]
	const detail = translation?.new_detail
	const embedUrl = getYoutubeEmbedUrl(detail?.link)

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

						<div className={classes.media}>
							{embedUrl ? (
								<div className={classes.video}>
									<iframe
										src={embedUrl}
										title={translation.title}
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
										className={classes.iframes}
									/>
								</div>
							) : (
								<div className={classes.img}>
									<Image
										width={100}
										height={100}
										src={`${BASE_URL}${data.image}`}
										alt={translation.title}
									/>
								</div>
							)}
						</div>
					</div>

					<Typography variant='b1' weight='medium' className={classes.text}>
						<Linkify>{detail?.text}</Linkify>
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
						{t('buttons.back')}
					</CustomButton>
				</div>
			</MultiContainer>
		</section>
	)
}
