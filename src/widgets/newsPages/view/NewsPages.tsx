'use client'
import { MultiContainer, NewCard, Typography } from "@/shared/ui"
import classes from './NewsPages.module.scss'

const data = [
	{
		title: 'Ошский городской кенеш утвердил постановление № 80',
		description:
			'Полномочия изымать землю для общественных нужд у городского кенеша действительно есть.',
		date: '01.01.2023',
	},
	{
		title: 'Новость 2',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
	{
		title: 'Новость 3',
		description: 'Описание новости 3',
		date: '01.01.2023',
	},
	{
		title: 'Новость 4',
		description:
			'Полномочия изымать землю для общественных нужд у городского кенеша действительно есть.',
		date: '01.01.2023',
	},
	{
		title: 'Новость 5',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
	{
		title: 'Новость 5',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
	{
		title: 'Новость 5',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
	{
		title: 'Новость 5',
		description: 'Описание новости 2',
		date: '01.01.2023',
	},
]
export const NewsPages = () => {
  return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						Новости
					</Typography>
					<div className={classes.content}>
						{data.map((item, index) => (
							<div key={index} className={classes.item} >
								<NewCard
									variant='pagesCard'
									img={
										'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-free-desktop-wallpaper-beautiful-green-fields-image_2950823.jpg'
									}
									title={item.title}
									descriptions={item.description}
									date={item.date}
									path='newsDetails'
								/>
							</div>
						))}
					</div>
				</div>
			</MultiContainer>
		</section>
	)
}
