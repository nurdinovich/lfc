'use client'

import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { CustomButton } from '../../button/view/CustomButton'
import { Typography } from '../../typography/view/Typography'
import classes from './Overlay.module.scss'
import { useRouter } from 'next/navigation'

interface OverlayProps {
	onClose: () => void
}

export const Overlay: React.FC<OverlayProps> = ({ onClose }) => {
	const { t } = useSafeTranslation()
	const router = useRouter()

	const handleOk = () => {
		onClose()
		router.back()
	}

	return (
		<div className={classes.overlay}>
			<div className={classes.overlayBox}>
				<Typography variant='h3' weight='semiBold'>
					{t('overlay.successfully')}
				</Typography>

				<Typography variant='b2' weight='regular'>
					{t('overlay.look')}
				</Typography>

				<CustomButton variant='primary' actionType='button' onClick={handleOk}>
					Ok
				</CustomButton>
			</div>
		</div>
	)
}
