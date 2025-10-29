'use client'
import { CustomButton, MultiContainer, ServicesCard, Typography } from '@/shared/ui'
import classes from './ServicesBlock.module.scss'

const data = [
	{
		title: 'Трудовое право',
		descriptions: [
			'Разработка трудовых договоров, приказов, локальных актов;',
			'Разрешение трудовых споров;',
			'Консультации по увольнению, отпускам и охране труда.',
		],
	},
	{
		title: 'Кадровый учёт',
		descriptions: [
			'Оформление приёма, увольнения, отпусков;',
			'Ведение личных дел сотрудников;',
			'Подготовка трудовых договоров и приказов.',
		],
	},
	{
		title: 'Консультации и аудит',
		descriptions: [
			'Проверка правильности ведения учёта;',
			'Рекомендации по улучшению финансового контроля;',
			'Подготовка компании к налоговым проверкам.',
		],
	},
]
export const ServicesBlock = () => {
	return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold' className={classes.title}>
					Услуги
				</Typography>
				<div className={classes.container}>
					{data.map((item, index) => (
						<ServicesCard
							variant='mainCard'
							key={index}
							title={item.title}
							descriptions={item.descriptions}
						/>
					))}
				</div>
        <div className={classes.btn}>
				<CustomButton
					variant={'primary'}
					actionType={'button'}
				>
					Узнать подробнее
				</CustomButton>
        </div>
			</MultiContainer>
		</section>
	)
}
