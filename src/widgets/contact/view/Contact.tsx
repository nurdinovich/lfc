'use client'

import { MapAdress } from '@/features/mapAdress/view/MapAdress'
import { AnimatedBlock, MultiContainer, Typography } from '@/shared/ui'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import classes from './Contact.module.scss'

import { motion } from 'framer-motion'

export const Contact = () => {
	const { t } = useSafeTranslation()

	return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					{/* Заголовок */}
					<AnimatedBlock animationType='slideUp'>
						<Typography variant='h2' weight='bold'>
							{t('block.contact')}
						</Typography>
					</AnimatedBlock>

					{/* Контакты + карта */}
					<AnimatedBlock animationType='none' delay={0.2}>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<MapAdress />
						</motion.div>
					</AnimatedBlock>
				</div>
			</MultiContainer>
		</section>
	)
}
