'use client'
import { FC, useRef, useState } from 'react'
import { AccordeonMinus, AccordeonPlus } from '@/shared/assest/icons'
import { IAccordionItem } from '../types/types'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './FaqBlock.module.scss'

const data: IAccordionItem[] = [
	{
		id: 1,
		title: 'Чем вы отличаетесь от частных бухгалтеров и юристов?',
		content:
			'Мы предоставляем широкий спектр услуг включая веб-разработку, дизайн и консультации.',
	},
	{
		id: 2,
		title: 'Как связаться с поддержкой?',
		content:
			'Вы можете связаться с нашей поддержкой по телефону, email или через онлайн-чат на сайте.',
	},
	{
		id: 3,
		title: 'Как связаться с поддержкой?',
		content:
			'Вы можете связаться с нашей поддержкой по телефону, email или через онлайн-чат на сайте.',
	},
]

export const FaqBlock: FC = () => {
	const [openItemId, setOpenItemId] = useState<number | null>(null)
	const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

	const toggleItem = (id: number) => {
		setOpenItemId(prevId => (prevId === id ? null : id))
	}

	const setContentRef = (id: number) => (el: HTMLDivElement | null) => {
		contentRefs.current[id] = el
	}

	return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold'>
					Часто задаваемые вопросы (FAQ)
				</Typography>
				{data.map(item => (
					<div 
						key={item.id}
						className={`${classes.accordionItem} ${
							openItemId === item.id ? classes.open : ''
						}`}
					>
						<div
							className={`${classes.accordionHeader} ${
								openItemId === item.id ? classes.active : ''
							}`}
							onClick={() => toggleItem(item.id)}
						>
							<Typography
								variant='h3'
								weight='regular'
								className={classes.title}
							>
								{item.id}.
								&nbsp;
								{item.title}
							</Typography>
							<span className={classes.icon}>
								{openItemId === item.id ? (
									<AccordeonMinus />
								) : (
									<AccordeonPlus />
								)}
							</span>
						</div>

						<div
							ref={setContentRef(item.id)}
							className={classes.accordionContent}
							style={{
								maxHeight:
									openItemId === item.id
										? `${contentRefs.current[item.id]?.scrollHeight || 0}px`
										: '0px',
							}}
						>
							<div className={classes.accordionInner}>
								<Typography
									variant='b1'
									weight='regular'
									className={classes.text}
								>
									{item.content}
								</Typography>
							</div>
						</div>
					</div>
				))}
			</MultiContainer>
		</section>
	)
}
