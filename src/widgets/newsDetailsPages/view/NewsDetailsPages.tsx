import { CustomButton, MultiContainer, Typography } from '@/shared/ui'
import classes from './NewsDetailsPages.module.scss'
import { IconsLeft } from '@/shared/assest/icons'

const data = [
	{
		title:
			'В КР предлагают ввести штрафы за незарегистрированные долевые сделки',
		description:
			'Группа депутатов Жогорку Кенеша инициировала поправки в несколько законов и кодексов страны. Они касаются договоров долевого участия в строительстве, их регистрации и правил использования земельных участков.',
		date: '20.06.2025',
		img: 'https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg',
		text: '"Договор долевого участия должен быть обязательно зарегистрирован, и только после этого он будет иметь юридическую силу. Если этого не сделать, квартиру могут просто перепродать — без последствий для застройщика. Законопроект вводит штраф, и, скорее всего, его придется платить именно дольщику — физическому лицу, если регистрация не будет произведена в течение 30 дней после подписания", — пояснил Плужник.',
	},
]

export const NewsDetailsPages = () => {
	return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						{data[0].title}
					</Typography>
					<Typography variant='h3' weight='semiBold'>
						{data[0].description}
					</Typography>
					<div className={classes.content}>
						<Typography variant='b1' weight='regular'>
							{data[0].date}
						</Typography>
						<div className={classes.img}>
							<img src={data[0].img} alt='' />
						</div>
					</div>
					<Typography variant='b1' weight='medium' className={classes.text}>
						{data[0].text}
					</Typography>

					<CustomButton
						variant='primary'
						actionType='link'
						to={'/news'}
						className={classes.btn}
					>
						<span className={classes.icon}>
							<IconsLeft />
						</span>
						Вернуться ко всем новостям
					</CustomButton>
				</div>
			</MultiContainer>
		</section>
	)
}
