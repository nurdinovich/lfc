import { Typography } from '@/shared/ui'
import classes from './Adress.module.scss'
import { useMapAdress } from '@/shared/api/useMapAdress'
import { useWorks } from '@/shared/api/useWorks'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

export const Adress = () => {
	const { data } = useMapAdress()
	const { data: grafic } = useWorks()
const { t } = useSafeTranslation()
	return (
		<div className={classes.adress}>
			<div className={classes.container}>
				{data?.map((item, index) => (
					<div key={index} className={classes.item}>
						<Typography variant='b2' weight='regular'>
							{item.contact_translations[0].city}{' '}
							<span>{item.contact_translations[0].address}</span>
						</Typography>
						<Typography variant='b2' weight='regular'>
							<a
								href={`tel:${item.phone_number1}`}
								className={classes.phoneLink}
							>
								{item.phone_number1}
							</a>{' '}
							<span>
								<a
									href={`tel:${item.phone_number2}`}
									className={classes.phoneLink}
								>
									{item.phone_number2}
								</a>
							</span>
						</Typography>
					</div>
				))}
			</div>
			<div className={classes.grafic}>
				<Typography variant='b2' weight='regular'>
					{t('buttons.grafic')}
				</Typography>
				{grafic?.map((item, index) => (
					<div key={index}>
						<div className={classes.item}>
							<Typography variant='b2' weight='regular'>
								{item.working_days}
							</Typography>

							<Typography variant='b2' weight='regular'>
								{item.working_hours}
							</Typography>

							<Typography variant='b2' weight='regular'>
								{item.weekend}
							</Typography>

							<Typography variant='b2' weight='regular'>
								{t('buttons.dayof')}
							</Typography>
						</div>

						<div className={classes.content}>
							<div className={classes.item}>
								<Typography variant='b2' weight='regular'>
									{item.working_days}
								</Typography>
								<Typography variant='b2' weight='medium'>
									{item.weekend}
								</Typography>
							</div>

							<div className={classes.item}>
								<Typography variant='b2' weight='regular'>
									{item.working_hours}
								</Typography>
								<Typography variant='b2' weight='medium'>
									{t('buttons.dayof')}
								</Typography>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
