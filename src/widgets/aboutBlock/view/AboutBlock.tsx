'use client'

import { AnimatedBlock, MultiContainer, Typography } from '@/shared/ui'
import classes from './AboutBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useAboutBlock } from '../api/useAboutBlock'
import { Loader } from '@/shared/ui/loader/view/Loader'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const CountUp = ({ value }: { value: string | number }) => {
	const raw = String(value)

	const numericValue = Number(raw.replace(/\D/g, '')) || 0

	// проверяем, есть ли "+"
	const hasPlus = raw.includes('+')

	const [count, setCount] = useState(0)

	useEffect(() => {
		let current = 0
		const step = Math.max(1, Math.floor(numericValue / 30))

		const timer = setInterval(() => {
			current += step
			if (current >= numericValue) {
				setCount(numericValue)
				clearInterval(timer)
			} else {
				setCount(current)
			}
		}, 50)

		return () => clearInterval(timer)
	}, [numericValue])

	return (
		<>
			{count}
			{hasPlus && '+'}
		</>
	)
}


export const AboutBlock = () => {
	const { t } = useSafeTranslation()
	const { data, isLoading } = useAboutBlock('ru')

	if (isLoading) return <Loader />
	if (!data?.[0]) return null

	const stats = [
		{ number: data[0].number1, title: data[0].title1 },
		{ number: data[0].number2, title: data[0].title2 },
		{ number: data[0].number3, title: data[0].title3 },
		{ number: data[0].number4, title: data[0].title4 },
	]

	return (
		<section className={classes.section}>
			<MultiContainer>
				{/* Заголовок */}
				<AnimatedBlock animationType='slideUp'>
					<Typography variant='h2' weight='bold'>
						{t('navigation.about')}
					</Typography>
				</AnimatedBlock>

				<div className={classes.container}>
					{/* Статистика */}
					<div className={classes.stats}>
						{stats.map((stat, index) => (
							<AnimatedBlock
								key={index}
								animationType='slideUp'
								delay={index * 0.1}
							>
								<div className={classes.statItem}>
									<Typography variant='h2' weight='medium'>
										<CountUp value={stat.number} />
									</Typography>
									<Typography variant='b1' weight='regular'>
										{stat.title}
									</Typography>
								</div>
							</AnimatedBlock>
						))}
					</div>

					{/* Текст */}
					<AnimatedBlock animationType='none' delay={0.2}>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<Typography
								variant='b1'
								weight='regular'
								className={classes.text}
							>
								{data[0].description}
							</Typography>
						</motion.div>
					</AnimatedBlock>
				</div>
			</MultiContainer>
		</section>
	)
}
