'use client'
import { useEffect, useState } from 'react'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './AboutPages.module.scss'
import Image from 'next/image'
import { useAboutPages } from '../api/useAboutPages'
import { BASE_URL } from '@/shared/constants/constants'
import { Loader } from '@/shared/ui/loader/view/Loader'
import { BreadCrumbs } from '@/shared/ui/breadCrumbs/view/BreadCrumbs'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

export const AboutPages = () => {
	const { data, isLoading } = useAboutPages()
	const { t } = useSafeTranslation()

	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	// ВАЖНО: и на сервере, и на первом рендере клиента покажем Loader
	const showLoader = !hasMounted || isLoading

	if (showLoader) {
		return <Loader />
	}

	const about = data?.[0]

	return (
		<section className={classes.section}>
			<BreadCrumbs breadCrumbKey='about' />
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						{t('navigation.about')}
					</Typography>

					<div className={classes.img}>
						<div className={classes.imgs}>
							<Image
								width={500}
								height={500}
								src={
									about?.image1
										? `${BASE_URL}${about.image1}`
										: '/placeholder.png'
								}
								alt=''
							/>
						</div>

						<div className={classes.imgs}>
							<Image
								width={500}
								height={500}
								src={
									about?.image2
										? `${BASE_URL}${about.image2}`
										: '/placeholder.png'
								}
								alt=''
							/>
						</div>
					</div>

					<Typography variant='b1' weight='regular' className={classes.text}>
						{about?.about_us}
					</Typography>
				</div>

				<div className={classes.content}>
					<Typography variant='h2' weight='bold'>
						{t('services.history')}
					</Typography>

					<Typography variant='b1' weight='regular' className={classes.text}>
						{about?.our_history}
					</Typography>
				</div>
			</MultiContainer>
		</section>
	)
}
