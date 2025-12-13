'use client'
import { CustomButton, MultiContainer, ServicesCard, Typography } from '@/shared/ui'
import classes from './ServicesBlock.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useServicesBlock } from '../api/useServicesBlock'

export const ServicesBlock = () => {
	const {t} = useSafeTranslation()
	const { data } = useServicesBlock('ru')
	return (
		<section className={classes.section}>
			<MultiContainer>
				<Typography variant='h2' weight='bold' className={classes.title}>
					{t('navigation.services')}
				</Typography>
				<div className={classes.container}>
					{data?.map((item, index) => (
						<ServicesCard
							variant='mainCard'
							key={index}
							title={item.title}
							descriptions={item.descriptions.map(desc => desc.description)}
						/>
					))}
				</div>
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
			</MultiContainer>
		</section>
	)
}
