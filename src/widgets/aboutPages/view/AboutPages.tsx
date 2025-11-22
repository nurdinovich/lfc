'use client'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './AboutPages.module.scss'
import Image from 'next/image'
import { useAboutPages } from '../api/useAboutPages'
import { BASE_URL } from '@/shared/constants/constants'
import { Loader } from '@/shared/ui/loader/view/Loader'

export const AboutPages = () => {
	const {data,isLoading} = useAboutPages()

	if (isLoading) {
		return <Loader />
	}
	return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						О нас
					</Typography>
					<div className={classes.img}>
						<div className={classes.imgs}>
							<Image
								width={500}
								height={500}
								src={`${BASE_URL}${data && data[0] && data[0].image1}`}
								alt=''
							/>
						</div>
						<div className={classes.imgs}>
							<Image
								width={500}
								height={500}
								src={`${BASE_URL}${data && data[0] && data[0].image2}`}
								alt=''
							/>
						</div>
					</div>
					<Typography variant='b1' weight='regular' className={classes.text}>
						{data && data[0] && data[0].about_us}
					</Typography>
				</div>
				<div className={classes.content}>
					<Typography variant='h2' weight='bold'>
						История компании
					</Typography>
					<Typography variant='b1' weight='regular' className={classes.text}>
						{data && data[0] && data[0].our_history}
					</Typography>
				</div>
			</MultiContainer>
		</section>
	)
}
