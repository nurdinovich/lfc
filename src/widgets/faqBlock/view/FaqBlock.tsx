'use client'

import { FC, useState } from 'react'
import { AccordeonMinus, AccordeonPlus } from '@/shared/assest/icons'
import { AnimatedBlock, MultiContainer, Typography } from '@/shared/ui'
import classes from './FaqBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useFaqBlock } from '../api/useFaqBlock'
import { AnimatePresence, motion } from 'framer-motion'

export const FaqBlock: FC = () => {
	const [openItemId, setOpenItemId] = useState<number | null>(null)
	const { t } = useSafeTranslation()
	const { data } = useFaqBlock('ru')

	const toggleItem = (id: number) => {
		setOpenItemId(prev => (prev === id ? null : id))
	}

	return (
		<section className={classes.section}>
			<MultiContainer>
				{/* Заголовок */}
				<AnimatedBlock animationType='slideUp'>
					<Typography variant='h2' weight='bold'>
						{t('navigation.faq')}
					</Typography>
				</AnimatedBlock>

				{/* Список FAQ */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					{data?.map((item, index) => {
						const isOpen = openItemId === item.id

						return (
							<motion.div
								key={item.id}
								className={`${classes.accordionItem} ${
									isOpen ? classes.open : ''
								}`}
								initial={{ opacity: 0, y: 12 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.35, delay: index * 0.06 }}
								viewport={{ once: true, amount: 0.2 }}
							>
								<div
									className={`${classes.accordionHeader} ${
										isOpen ? classes.active : ''
									}`}
									onClick={() => toggleItem(item.id)}
									role='button'
									tabIndex={0}
									aria-expanded={isOpen}
								>
									<Typography
										variant='h3'
										weight='regular'
										className={classes.title}
									>
										{item.id}.&nbsp;{item.title}
									</Typography>

									{/* Иконка: плавный поворот */}
									<motion.span
										className={classes.icon}
										animate={{ rotate: isOpen ? 180 : 0 }}
										transition={{ duration: 0.2 }}
									>
										{isOpen ? <AccordeonMinus /> : <AccordeonPlus />}
									</motion.span>
								</div>

								{/* Контент: height + opacity */}
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											className={classes.accordionContent}
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3, ease: 'easeInOut' }}
											style={{ overflow: 'hidden' }}
										>
											<div className={classes.accordionInner}>
												<Typography
													variant='b1'
													weight='regular'
													className={classes.text}
												>
													{item.description}
												</Typography>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						)
					})}
				</motion.div>
			</MultiContainer>
		</section>
	)
}
