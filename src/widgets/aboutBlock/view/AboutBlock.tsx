'use client'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './AboutBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'



const stats = [
	{ number: '5', text: 'Лет опыта' },
	{ number: '1000+', text: 'Успешных кейсов' },
	{ number: '100+', text: 'Постоянных клиентов' },
	{ number: '2', text: 'Филиала по Кыргызстану' },
]
export const AboutBlock = () => {
  const { t } = useSafeTranslation()
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
									{item.number}
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
						надёжным партнёром в этих сферах. <br />Мы объединяем опыт юристов и
						бухгалтеров, чтобы вы могли сосредоточиться на развитии компании, не
						отвлекаясь на рутину, отчёты и риски. <br /> Наша миссия — защищать
						интересы клиентов и помогать им принимать верные решения. Мы верим,
						что честность, прозрачность и профессионализм — это основа
						долгосрочного сотрудничества.
					</Typography>
				</div>
			</MultiContainer>
		</section>
	)
}
