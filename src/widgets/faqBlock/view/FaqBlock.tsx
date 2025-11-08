'use client'
import { FC, useRef, useState, useLayoutEffect } from 'react'
import { AccordeonMinus, AccordeonPlus } from '@/shared/assest/icons'
import { IAccordionItem } from '../types/types'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './FaqBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

const data: IAccordionItem[] = [
	{
		id: 1,
		title: 'Чем вы отличаетесь от частных бухгалтеров и юристов?',
		content:
			'Мы предоставляем широкий спектр услуг, включая веб-разработку, дизайн и консультации.',
	},
	{
		id: 2,
		title: 'Как связаться с поддержкой?',
		content:
			'Вы можете связаться с нашей поддержкой по телефону, email или через онлайн-чат на сайте.',
	},
	{
		id: 3,
		title: 'Какие у вас условия сотрудничества?',
		content:
			'Мы предлагаем гибкие условия и индивидуальный подход к каждому клиенту.',
	},
]

export const FaqBlock: FC = () => {
	const [openItemId, setOpenItemId] = useState<number | null>(null)
	const [maxHeights, setMaxHeights] = useState<{ [key: number]: number }>({})
	const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})
	const { t } = useSafeTranslation()

	const toggleItem = (id: number) => {
		setOpenItemId(prevId => (prevId === id ? null : id))
	}

	const setContentRef = (id: number) => (el: HTMLDivElement | null) => {
		contentRefs.current[id] = el
	}

	// ✅ Используем useLayoutEffect для измерения DOM
	useLayoutEffect(() => {
		const newHeights: { [key: number]: number } = {}
		for (const [id, el] of Object.entries(contentRefs.current)) {
			if (el) newHeights[Number(id)] = el.scrollHeight
		}
		setMaxHeights(newHeights)
	}, [])

	return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold'>
					{t('block.faq')}
				</Typography>

				{data.map(item => {
					const isOpen = openItemId === item.id
					return (
						<div
							key={item.id}
							className={`${classes.accordionItem} ${
								isOpen ? classes.open : ''
							}`}
						>
							<div
								className={`${classes.accordionHeader} ${
									isOpen ? classes.active : ''
								}`}
								onClick={() => toggleItem(item.id)}
							>
								<Typography
									variant='h3'
									weight='regular'
									className={classes.title}
								>
									{item.id}.&nbsp;{item.title}
								</Typography>
								<span className={classes.icon}>
									{isOpen ? <AccordeonMinus /> : <AccordeonPlus />}
								</span>
							</div>

							<div
								ref={setContentRef(item.id)}
								className={classes.accordionContent}
								style={{
									maxHeight: isOpen ? `${maxHeights[item.id] || 0}px` : '0px',
									transition: 'max-height 0.3s ease',
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
					)
				})}
			</MultiContainer>
		</section>
	)
}
