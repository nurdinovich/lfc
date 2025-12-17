'use client'

import {
	AnimatedBlock,
	CustomButton,
	MultiContainer,
	ServicesCard,
	Typography,
} from '@/shared/ui'
import classes from './ServicesBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useServicesBlock } from '../api/useServicesBlock'

export const ServicesBlock = () => {
	const { t } = useSafeTranslation()
	const { data } = useServicesBlock('ru')

	return (
		<section className={classes.section}>
			<MultiContainer>
				<AnimatedBlock animationType='slideUp'>
					<Typography variant='h2' weight='bold' className={classes.title}>
						{t('navigation.services')}
					</Typography>
				</AnimatedBlock>
				<div className={classes.container}>
					{data?.map((item, index) => {
						const animationType = index % 2 === 0 ? 'slideRight' : 'slideLeft'

						return (
							<AnimatedBlock
								key={item.id ?? index}
								animationType={animationType}
								delay={index * 0.1}
							>
								<ServicesCard
									variant='mainCard'
									title={item.title}
									descriptions={item.descriptions.map(desc => desc.description)}
								/>
							</AnimatedBlock>
						)
					})}
				</div>
				<AnimatedBlock animationType='slideUp' delay={0.2}>
					<div className={classes.btn}>
						<CustomButton
							variant='primary'
							actionType='link'
							to='services'
							className={classes.button}
						>
							{t('buttons.more')}
						</CustomButton>
					</div>
				</AnimatedBlock>
			</MultiContainer>
		</section>
	)
}
