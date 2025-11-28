'use client'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './AboutBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useEffect, useState, useRef } from 'react'
import { useAboutBlock } from '../api/useAboutBlock'
import { Loader } from '@/shared/ui/loader/view/Loader'

// Helper function to safely extract numbers
const safeExtractNumber = (numString: string | undefined): number => {
	if (!numString) return 0
	const numbers = numString.replace(/\D/g, '')
	return numbers ? Number(numbers) : 0
}

export const AboutBlock = () => {
	const { t } = useSafeTranslation()
	const { data, isLoading } = useAboutBlock()

	// Initialize counts based on data availability
	const initialCounts = data && data[0] ? Array(4).fill(0) : []
	const [counts, setCounts] = useState<number[]>(initialCounts)
	const intervalsRef = useRef<NodeJS.Timeout[]>([])
	const animationStartedRef = useRef(false)

	// Animation effect - only runs when data changes and animation hasn't started
	useEffect(() => {
		if (!data || !data[0] || animationStartedRef.current) return

		const stats = [
			{ number: data[0].number1, title: data[0].title1 },
			{ number: data[0].number2, title: data[0].title2 },
			{ number: data[0].number3, title: data[0].title3 },
			{ number: data[0].number4, title: data[0].title4 },
		]

		// Mark animation as started
		animationStartedRef.current = true

		// Clear any existing intervals
		intervalsRef.current.forEach(interval => clearInterval(interval))
		intervalsRef.current = []

		stats.forEach((stat, index) => {
			if (!stat.number) return

			const target = safeExtractNumber(stat.number)
			if (target <= 0) return

			const duration = 2500
			const step = Math.ceil(target / (duration / 20))

			const interval = setInterval(() => {
				setCounts(prev => {
					const newCounts = [...prev]
					const currentValue = newCounts[index]

					// Only update if we haven't reached the target
					if (currentValue < target) {
						const nextValue = Math.min(currentValue + step, target)
						newCounts[index] = nextValue

						// Clear interval if we reached the target
						if (nextValue >= target) {
							clearInterval(interval)
							intervalsRef.current = intervalsRef.current.filter(
								i => i !== interval
							)
						}
					}
					return newCounts
				})
			}, 20)

			intervalsRef.current.push(interval)
		})

		// Cleanup function
		return () => {
			intervalsRef.current.forEach(interval => clearInterval(interval))
			intervalsRef.current = []
		}
	}, [data]) // Only depend on data

	// Reset animation state when data changes
	useEffect(() => {
		animationStartedRef.current = false
	}, [data])

	if (isLoading) return <Loader />

	if (!data || !data[0]) return null

	const stats = [
		{ number: data[0].number1, title: data[0].title1 },
		{ number: data[0].number2, title: data[0].title2 },
		{ number: data[0].number3, title: data[0].title3 },
		{ number: data[0].number4, title: data[0].title4 },
	]

	// Ensure counts array matches stats length
	const displayCounts =
		counts.length === stats.length ? counts : Array(stats.length).fill(0)

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
									{displayCounts[index]}
									{stat.number?.includes('+') && '+'}
								</Typography>
								<Typography variant='b1' weight='regular'>
									{stat.title || ''}
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
