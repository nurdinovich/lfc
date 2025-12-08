'use client'
import { Errors } from '@/shared/assest/icons'
import { CustomButton } from '../../button/view/CustomButton'
import { Typography } from '../../typography/view/Typography'
import classes from './Error.module.scss'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

export const Error = () => {
	const {t} = useSafeTranslation()
	return (
		<div className={classes.error}>
				<div className={classes.container}>
					<div className={classes.img}>
						<Errors />
					</div>
					<Typography variant='h1' weight='bold'>
						{t('overlay.error')}
					</Typography>
					<Typography variant='h3' weight='regular'>
						{t('overlay.errorText')}
					</Typography>
					<CustomButton variant='primary' actionType='button' onClick={() => history.back()}>
						← {t('buttons.backt')}
					</CustomButton>
				</div>
		</div>
	)
}
