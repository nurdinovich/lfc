'use client'
import { CustomButton, MultiContainer, ServicesCard, Typography } from '@/shared/ui'
import classes from './ServicesBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useServicesBlock } from '../api/useServicesBlock'

// const data = [
// 	{
// 		title: 'Трудовое право',
// 		descriptions: [
// 			'Разработка трудовых договоров, приказов, локальных актов;',
// 			'Разрешение трудовых споров;',
// 			'Консультации по увольнению, отпускам и охране труда.',
// 		],
// 	},
// 	{
// 		title: 'Кадровый учёт',
// 		descriptions: [
// 			'Оформление приёма, увольнения, отпусков;',
// 			'Ведение личных дел сотрудников;',
// 			'Подготовка трудовых договоров и приказов.',
// 		],
// 	},
// 	{
// 		title: 'Консультации и аудит',
// 		descriptions: [
// 			'Проверка правильности ведения учёта;',
// 			'Рекомендации по улучшению финансового контроля;',
// 			'Подготовка компании к налоговым проверкам.',
// 		],
// 	},
// ]
export const ServicesBlock = () => {
	const {t} = useSafeTranslation()
	const { data, isLoading } = useServicesBlock()
	return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold' className={classes.title}>
					{t('navigation.services')}
				</Typography>
				<div className={classes.container}>
					{data?.map((item, index) => (
						<ServicesCard
							variant='mainCard'
							key={index}
							title={item.title}
							descriptions={item.descriptions.map(desc => desc.description)}
						/>
					))}
				</div>
				<div className={classes.btn}>
					<CustomButton
						variant={'primary'}
						actionType={'button'}
						className={classes.button}
					>
						Узнать подробнее
					</CustomButton>
				</div>
			</MultiContainer>
		</section>
	)
}
