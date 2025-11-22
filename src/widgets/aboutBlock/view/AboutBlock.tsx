'use client'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './AboutBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useEffect, useState } from 'react'
import { useAboutBlock } from '../api/useAboutBlock'

export const AboutBlock = () => {
	const { t } = useSafeTranslation()
	const { data, isLoading } = useAboutBlock()
	const [counts, setCounts] = useState<number[]>([])

	useEffect(() => {
		if (!data || !data[0]) return

		const stats = [
			{ number: data[0].number1, title: data[0].title1 },
			{ number: data[0].number2, title: data[0].title2 },
			{ number: data[0].number3, title: data[0].title3 },
			{ number: data[0].number4, title: data[0].title4 },
		]

		setCounts(Array(stats.length).fill(0))

		stats.forEach((stat, index) => {
			const target = Number(stat.number.replace(/\D/g, ''))
			let start = 0
			const duration = 2500
			const step = Math.ceil(target / (duration / 20))

			const interval = setInterval(() => {
				start += step
				if (start >= target) {
					start = target
					clearInterval(interval)
				}
				setCounts(prev => {
					const newCounts = [...prev]
					newCounts[index] = start
					return newCounts
				})
			}, 20)
		})
	}, [data])

	if (isLoading) return <div>Loading...</div>

	if (!data || !data[0]) return null

	const stats = [
		{ number: data[0].number1, title: data[0].title1 },
		{ number: data[0].number2, title: data[0].title2 },
		{ number: data[0].number3, title: data[0].title3 },
		{ number: data[0].number4, title: data[0].title4 },
	]

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
									{counts[index]}
									{stat.number.includes('+') && '+'}
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
