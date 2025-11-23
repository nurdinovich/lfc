'use client'
import { CustomButton, MultiContainer, ServicesCard, Typography } from '@/shared/ui'
import classes from './SevicesPages.module.scss'
import { useServicesPages } from '../api/useServicesPages'
import { BreadCrumbs } from '@/shared/ui/breadCrumbs/view/BreadCrumbs'

export const SevicesPages = () => {
	const { data } = useServicesPages()

	console.log(data);
	
  return (
		<section className={classes.section}>
			<BreadCrumbs breadCrumbKey='services' />
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
						{data?.map(item => (
							<div key={item.id}>
								<ServicesCard
									variant='pagesCard'
									title={item.title}
									descriptions={item.descriptions.map(desc => desc.description)}
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

