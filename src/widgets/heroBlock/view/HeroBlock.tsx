'use client'
import { CustomButton, MultiContainer, Typography } from '@/shared/ui'
import classes from './HeroBlock.module.scss'

export const HeroBlock = () => {
	return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						Профессиональные юридические и бухгалтерские услуги в Бишкеке от LFC
					</Typography>

					<div className={classes.content}>
						<div className={classes.leftcontent}>
							<Typography
								variant='b1'
								weight='regular'
								className={classes.text}
							>
								Legal Finance Center — это команда профессиональных юристов и
								бухгалтеров, предоставляющая комплексные услуги для бизнеса и
								частных клиентов. Мы специализируемся на юридическом и
								бухгалтерском сопровождении компаний, регистрации предприятий,
								разработке договоров и консультировании по налоговым вопросам.
								Ваш бизнес — под надёжной правовой и финансовой защитой.
							</Typography>

							<CustomButton
								variant='primary'
								actionType='link'
								to='/employees'
								className={classes.btn}
							>
                  Записаться на консультацию
							</CustomButton>
						</div>

						<div className={classes.img}>
							<img
								src='https://advokat-region.ru/wp-content/uploads/2020/05/yuridicheskie-uslugi-v-ufe-900x573.jpg'
								alt='Юридические услуги в Бишкеке'
							/>
						</div>
					</div>
				</div>
			</MultiContainer>
		</section>
	)
}
