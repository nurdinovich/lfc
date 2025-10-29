import { CustomButton, MultiContainer, ServicesCard, Typography } from '@/shared/ui'
import classes from './SevicesPages.module.scss'

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
			'Подготовка компании к налоговым проверкам.',
			'Подготовка компании к налоговым проверкам.',
		],
	},
]
export const SevicesPages = () => {
  return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						Услуги
					</Typography>
					<Typography variant='b1' weight='medium'>
						Мы предоставляем профессиональные юридические и бухгалтерские услуги
						для бизнеса и частных клиентов. Наша цель — помочь вам работать
						уверенно, избегать рисков и экономить время на решении сложных
						вопросов.
					</Typography>
					<Typography variant='h2' weight='bold'>
						Наши услуги
					</Typography>
					<div className={classes.cards}>
						{data.map((item, index) => (
							<div key={index}>
								<ServicesCard
									variant='pagesCard'
									key={index}
									title={item.title}
									descriptions={item.descriptions}
								/>
							</div>
						))}
					</div>
					<CustomButton
						variant={'primary'}
						actionType={'link'}
            to={'/'}
						className={classes.btn}
					>
						Записаться на консультацию
					</CustomButton>
					<Typography variant='b1' weight='medium'>
						Если вы не нашли нужную услугу или хотите уточнить детали —
						запишитесь на консультацию. Наш специалист поможет подобрать
						оптимальное решение именно для вашего запроса.
					</Typography>
				</div>
			</MultiContainer>
		</section>
	)
}

