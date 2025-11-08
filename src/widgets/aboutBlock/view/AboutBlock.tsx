'use client'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './AboutBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useEffect, useState } from 'react'

interface Stat {
	number: string
	text: string
}

const stats: Stat[] = [
	{ number: '5', text: 'Лет опыта' },
	{ number: '1000', text: 'Успешных кейсов' },
	{ number: '100', text: 'Постоянных клиентов' },
	{ number: '2', text: 'Филиала по Кыргызстану' },
]

export const AboutBlock = () => {
	const { t } = useSafeTranslation()
	const [counts, setCounts] = useState<number[]>(Array(stats.length).fill(0))

	useEffect(() => {
		const durations = [2500, 2500, 2500, 2500] 

		stats.forEach((stat, index) => {
			const target = Number(stat.number.replace(/\D/g, ''))
			let start = 0
			const step = Math.ceil(target / (durations[index] / 20))

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
	}, [])

	return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold'>
					{t('navigation.about')}
				</Typography>

				<div className={classes.container}>
					<div className={classes.stats}>
						{stats.map((item, index) => (
							<div key={index} className={classes.statItem}>
								<Typography variant='h2' weight='medium'>
									{counts[index]}
									{item.number.includes('+') && '+'}
								</Typography>
								<Typography variant='b1' weight='regular'>
									{item.text}
								</Typography>
							</div>
						))}
					</div>

					<Typography variant='b1' weight='regular' className={classes.text}>
						Мы понимаем, как важно для бизнеса чувствовать уверенность в
						юридических и финансовых вопросах. LFC создан, чтобы стать вашим
						надёжным партнёром в этих сферах. <br /> Мы объединяем опыт юристов
						и бухгалтеров, чтобы вы могли сосредоточиться на развитии компании,
						не отвлекаясь на рутину, отчёты и риски. <br /> Наша миссия —
						защищать интересы клиентов и помогать им принимать верные решения.
						Мы верим, что честность, прозрачность и профессионализм — это основа
						долгосрочного сотрудничества.
					</Typography>
				</div>
			</MultiContainer>
		</section>
	)
}
