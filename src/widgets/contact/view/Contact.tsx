'use client'
import { MapAdress } from '@/features/mapAdress/view/MapAdress'
import { MultiContainer, Typography } from '@/shared/ui'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import classes from './Contact.module.scss'
export const Contact = () => {
	const { t } = useSafeTranslation()
	return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h2' weight='bold'>
						{t('block.contact')}
					</Typography>
					<MapAdress />
				</div>
			</MultiContainer>
		</section>
	)
}
