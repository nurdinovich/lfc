'use client'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './AboutBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useAboutBlock } from '../api/useAboutBlock'
import { Loader } from '@/shared/ui/loader/view/Loader'

export const AboutBlock = () => {
	const { t } = useSafeTranslation()
	const { data, isLoading } = useAboutBlock()

	if (!data || !data[0]) return null
	
	const stats = [
		{ number: data[0].number1, title: data[0].title1 },
		{ number: data[0].number2, title: data[0].title2 },
		{ number: data[0].number3, title: data[0].title3 },
		{ number: data[0].number4, title: data[0].title4 },
	]
	if (isLoading) return <Loader />


	return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold'>
					{t('navigation.about')}
				</Typography>

				<div className={classes.container}>
					<div className={classes.stats}>
						{stats.map((stat, index) => (
							<div key={index} className={classes.statItem}>
								<Typography variant='h2' weight='medium'>
									{stat.number}
								</Typography>
								<Typography variant='b1' weight='regular'>
									{stat.title}
								</Typography>
							</div>
						))}
					</div>

					<Typography variant='b1' weight='regular' className={classes.text}>
						{data[0].description}
					</Typography>
				</div>
			</MultiContainer>
		</section>
	)
}
