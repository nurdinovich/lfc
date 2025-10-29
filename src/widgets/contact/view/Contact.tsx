import { MapAdress } from '@/features/mapAdress/view/MapAdress'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './Contact.module.scss'
export const Contact = () => {
	return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h2' weight='bold'>
						Контакты
					</Typography>
					<MapAdress />
				</div>
			</MultiContainer>
		</section>
	)
}
