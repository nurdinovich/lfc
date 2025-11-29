import { useSafeTranslation } from "@/shared/hooks/useSafeTranslation"
import { CustomButton } from "../../button/view/CustomButton"
import { Typography } from "../../typography/view/Typography"
import classes from './Overlay.module.scss'
export const Overlay = () => {
  const {t} = useSafeTranslation()
  return (
		<div className={classes.overlay}>
			<Typography variant='h3' weight='semiBold'>
				{t('overlay.successfully')}
			</Typography>
			<Typography variant='b2' weight='regular'>
				{t('overlay.look')}
			</Typography>
			<CustomButton variant={'primary'} actionType={'button'}>
				Ok
			</CustomButton>
		</div>
	)
}
